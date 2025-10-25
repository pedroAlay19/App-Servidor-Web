import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RepairOrdersService } from '../repair-orders/repair-orders.service';
import { RepairOrderWithDetailsType } from './types/repair-order-with-details.type';
import { ServicePartsUsageType } from './types/service-parts-usage.type';
import { DateRangeInput } from './inputs/date-range.input';
import { TechnicianOrdersInput } from './inputs/technicians-orders.inputs';
import { RepairOrderType } from 'src/repair-orders/types/repair-order.type';
import { MaintenanceServicesService } from 'src/maintenance-services/maintenance-services-rest.service';
import { MostRequestedServiceType } from './types/most-requested-services.type';
import { TechnicianRevenueType } from './types/technicians-revenue.type';
import { TechniciansService } from 'src/technicians/technicians.service';
import { RepairOrderStatusSummaryType } from './types/repair-order-status-summary.type';
import { TechnicianAverageDiscountType } from './types/technician-average-discount.type';
import { PartUsageSummaryType } from './types/part-usage-summary.type';
import { AverageCostPerServiceType } from './types/average-cost-service.type';

@Resolver()
export class AnalyticsResolver {
  constructor(
    private readonly repairOrdersService: RepairOrdersService,
    private readonly maintenanceServicesService: MaintenanceServicesService,
    private readonly techniciansService: TechniciansService,
  ) {}

  // Devuelve las ordenes de reparacion con informacion detallada
  @Query(() => [RepairOrderWithDetailsType])
  async repairOrdersWithServicesAndTechnicians(): Promise<
    RepairOrderWithDetailsType[]
  > {
    const orders = await this.repairOrdersService.findAll();

    return orders.map((order) => ({
      id: order.id,
      problemDescription: order.problemDescription,
      status: order.status,
      serviceDetails: order.repairOrderDetails?.map((detail) => ({
        serviceName: detail.service.serviceName,
        technicianName: detail.technician.name,
        subTotal: detail.subTotal,
      })),
    }));
  }

  // Genera un reporte de cuántos repuestos se usaron por tipo de servicio, dentro de un rango de fechas específico.
  @Query(() => [ServicePartsUsageType])
  async servicePartsUsageReport(
    @Args('range', { type: () => DateRangeInput }) range: DateRangeInput,
  ): Promise<ServicePartsUsageType[]> {
    const orders = await this.repairOrdersService.findAll();

    // Step 1: Filter by date range
    const filteredOrders = orders.filter((order) => {
      const createdAt = new Date(order.createdAt);
      return (
        createdAt >= new Date(range.startDate) &&
        createdAt <= new Date(range.endDate)
      );
    });
    const result: ServicePartsUsageType[] = [];

    filteredOrders.forEach((order) => {
      // Loop through each service performed in the order
      order.repairOrderDetails?.forEach((detail) => {
        const service = detail.service;
        if (!service) return;

        // Check if the service already exists in the result
        let existingService = result.find((r) => r.service.id === service.id);

        // If not, create a new entryrange
        if (!existingService) {
          existingService = {
            service,
            partsUsed: [],
          };
          result.push(existingService);
        }

        // Loop through the spare parts used in this order
        order.repairOrderParts?.forEach((partItem) => {
          const part = partItem.part;
          if (!part) return;

          // Check if this part already exists under this service
          let existingPart = existingService.partsUsed.find(
            (p) => p.part.id === part.id,
          );

          // If not, create it
          if (!existingPart) {
            existingPart = {
              part,
              totalUsed: 0,
            };
            existingService.partsUsed.push(existingPart);
          }

          // Add the quantity used in this order
          existingPart.totalUsed += partItem.quantity;
        });
      });
    });

    return result;
  }

  // Obtiene todas las órdenes atendidas por un técnico específico en un rango de fechas.
  async technicianOrders(
    @Args('input', { type: () => TechnicianOrdersInput })
    input: TechnicianOrdersInput,
  ): Promise<RepairOrderType[]> {
    const orders = await this.repairOrdersService.findAll();

    // Filter by date range
    const filteredByDate = orders.filter((order) => {
      const createdAt = new Date(order.createdAt);
      return (
        createdAt >= new Date(input.startDate) &&
        createdAt <= new Date(input.endDate)
      );
    });

    // Filter by technician ID
    const filteredByTechnician = filteredByDate.filter((order) =>
      order.repairOrderDetails?.some(
        (detail) => detail.technician.id === input.technicianId,
      ),
    );

    return filteredByTechnician;
  }

  //Returns all repair orders filtered by a given status' Retorna todas las ordenes de reparacion filtradas por status (OPEN, IN_PROGRESS, RESOLVED, CLOSED)
  @Query(() => [RepairOrderType])
  async ordersByStatus(
    @Args('status', { type: () => String }) status: string,
  ): Promise<RepairOrderType[]> {
    const orders = await this.repairOrdersService.findAll();
    // Normalize status string (case-insensitive comparison)
    const normalized = status.trim().toLowerCase();

    // Filter orders matching the given status
    return orders.filter(
      (order) => order.status.trim().toLowerCase() === normalized,
    );
  }

  // Lista los servicios más solicitados (ordenados de mayor a menor demanda).
  @Query(() => [MostRequestedServiceType])
  async mostRequestedServices(
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  ): Promise<MostRequestedServiceType[]> {
    const orders = await this.repairOrdersService.findAll();
    const services = await this.maintenanceServicesService.findAll();

    // Contar cuántas veces se solicitó cada servicio
    const result: MostRequestedServiceType[] = services.map((service) => {
      let count = 0;
      orders.forEach((order) => {
        order.repairOrderDetails?.forEach((detail) => {
          if (detail.service.id === service.id) count++;
        });
      });
      return { service, totalRequests: count };
    });

    // Ordenar de mayor a menor
    result.sort((a, b) => b.totalRequests - a.totalRequests);

    // Limitar resultados si se pasa el argumento
    if (limit) return result.slice(0, limit);
    return result;
  }

  // Calcula los ingresos totales generados por cada técnico en un rango de fechas.
  @Query(() => [TechnicianRevenueType])
  async techniciansRevenue(
    @Args('range', { type: () => DateRangeInput }) range: DateRangeInput,
  ): Promise<TechnicianRevenueType[]> {
    const orders = await this.repairOrdersService.findAll();
    const technicians = await this.techniciansService.findAll();

    const result: TechnicianRevenueType[] = technicians.map((tech) => {
      // Filtrar todos los detalles de órdenes realizados por este técnico
      let totalRevenue = 0;
      orders.forEach((order) => {
        order.repairOrderDetails?.forEach((detail) => {
          if (detail.technician.id === tech.id) {
            const orderDate = new Date(order.createdAt);
            if (
              orderDate >= new Date(range.startDate) &&
              orderDate <= new Date(range.endDate)
            ) {
              totalRevenue += detail.subTotal;
            }
          }
        });
      });

      return { technician: tech, totalRevenue };
    });

    // Ordenar de mayor a menor ingresos
    result.sort((a, b) => b.totalRevenue - a.totalRevenue);

    return result;
  }

  // Devuelve un resumen estadístico de cuántas órdenes hay por estado (OPEN, IN_PROGRESS, RESOLVED, CLOSED)
  @Query(() => RepairOrderStatusSummaryType)
  async repairOrdersStatusSummary(): Promise<RepairOrderStatusSummaryType> {
    const orders = await this.repairOrdersService.findAll();

    const summary = {
      open: 0,
      inProgress: 0,
      resolved: 0,
      closed: 0,
    };

    orders.forEach((order) => {
      switch (order.status) {
        case 'OPEN':
          summary.open += 1;
          break;
        case 'IN_PROGRESS':
          summary.inProgress += 1;
          break;
        case 'RESOLVED':
          summary.resolved += 1;
          break;
        case 'CLOSED':
          summary.closed += 1;
          break;
      }
    });

    return summary;
  }

  // Calcula el promedio de descuento aplicado por cada técnico en un rango de fechas.
  @Query(() => [TechnicianAverageDiscountType])
  async averageDiscountByTechnician(
    @Args('range', { type: () => DateRangeInput }) range: DateRangeInput,
  ): Promise<TechnicianAverageDiscountType[]> {
    const orders = await this.repairOrdersService.findAll();
    const technicians = await this.techniciansService.findAll();

    const result: TechnicianAverageDiscountType[] = technicians.map((tech) => {
      let totalDiscount = 0;
      let count = 0;

      orders.forEach((order) => {
        const orderDate = new Date(order.createdAt);
        if (
          orderDate >= new Date(range.startDate) &&
          orderDate <= new Date(range.endDate)
        ) {
          order.repairOrderDetails?.forEach((detail) => {
            if (detail.technician.id === tech.id) {
              totalDiscount += detail.discount;
              count++;
            }
          });
        }
      });

      const averageDiscount = count > 0 ? totalDiscount / count : 0;

      return { technician: tech, averageDiscount };
    });

    return result;
  }

  // Genera un reporte detallado de uso de partes, agrupado por servicio y tecnico
  @Query(() => [PartUsageSummaryType])
  async partsUsageSummary(
    @Args('range', { type: () => DateRangeInput }) range: DateRangeInput,
  ): Promise<PartUsageSummaryType[]> {
    const orders = await this.repairOrdersService.findAll();

    const result: PartUsageSummaryType[] = [];

    orders.forEach((order) => {
      const orderDate = new Date(order.createdAt);
      if (orderDate >= range.startDate && orderDate <= range.endDate) {
        order.repairOrderDetails?.forEach((detail) => {
          const service = detail.service;
          const technician = detail.technician;

          order.repairOrderParts?.forEach((partItem) => {
            const part = partItem.part;

            // Verificar si ya existe la combinación service+technician+part
            const existing = result.find(
              (r) =>
                r.service.id === service.id &&
                r.technician.id === technician.id &&
                r.part.id === part.id,
            );

            if (existing) {
              existing.totalUsed += partItem.quantity;
            } else {
              result.push({
                service,
                technician,
                part,
                totalUsed: partItem.quantity,
              });
            }
          });
        });
      }
    });

    return result;
  }

  // Cuánto se factura en promedio por cada tipo de servicio.
  @Query(() => [AverageCostPerServiceType])
  async averageCostPerServiceType(
    @Args('range', { type: () => DateRangeInput }) range: DateRangeInput,
  ): Promise<AverageCostPerServiceType[]> {
    const orders = await this.repairOrdersService.findAll();
    const services = await this.maintenanceServicesService.findAll();

    const result: AverageCostPerServiceType[] = services.map((service) => {
      let total = 0;
      let count = 0;

      orders.forEach((order) => {
        const orderDate = new Date(order.createdAt);
        if (orderDate >= range.startDate && orderDate <= range.endDate) {
          order.repairOrderDetails?.forEach((detail) => {
            if (detail.service.id === service.id) {
              total += detail.subTotal;
              count++;
            }
          });
        }
      });

      return {
        service,
        averageCost: count > 0 ? total / count : 0,
      };
    });

    return result;
  }
}
