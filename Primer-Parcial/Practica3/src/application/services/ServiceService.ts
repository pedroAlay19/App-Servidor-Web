import { IServiceRepository } from "../../domain/repositories/IServiceRepository";
import { ServiceEntity } from "../../domain/entities/service.entity";

export class ServiceService {
  constructor(private readonly serviceRepository: IServiceRepository) {}

  async getAllServices(): Promise<ServiceEntity[]> {
    return this.serviceRepository.findAll();
  }

  async getServiceById(id: string): Promise<ServiceEntity> {
    const service = await this.serviceRepository.findById(id);
    if (!service) throw new Error(`Service with ID '${id}' not found`);
    return service;
  }

  async createService(data: {
    name: string;
    description: string;
    basePrice: number;
    category: string;
  }): Promise<ServiceEntity> {
    if (!data.name || data.name.trim().length < 3) {
      throw new Error("Service name must have at least 3 characters");
    }

    if (data.basePrice == null || data.basePrice < 0) {
      throw new Error("Service price must be a valid positive number");
    }

    const newService = new ServiceEntity();
    newService.serviceName = data.name.trim();
    newService.category = data.category;
    newService.basePrice = data.basePrice;
    newService.description = data.description?.trim();

    return this.serviceRepository.create(newService);
  }

  async updateService(id: string, data: Partial<ServiceEntity>): Promise<ServiceEntity> {
    const existing = await this.getServiceById(id);

    if (data.serviceName && data.serviceName.trim().length < 3) {
      throw new Error("Service name must have at least 3 characters");
    }

    if (data.basePrice != null && data.basePrice < 0) {
      throw new Error("Service price must be positive");
    }

    if (data.serviceName) existing.serviceName = data.serviceName.trim();
    if (data.basePrice != null) existing.basePrice = data.basePrice;
    if (data.description) existing.description = data.description.trim();

    return this.serviceRepository.update(existing);
  }

  async deleteService(id: string): Promise<void> {
    await this.getServiceById(id);
    await this.serviceRepository.delete(id);
  }
}
