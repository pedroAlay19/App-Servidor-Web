import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { MaintenanceServicesService } from './maintenance-services-rest.service';
import { MaintenanceServiceType } from './types/maintenance-service.type';

@Resolver(() => MaintenanceServiceType)
export class MaintenanceServicesResolver {
  constructor(private readonly maintenanceServicesService: MaintenanceServicesService) {}

  @Query(() => [MaintenanceServiceType], { name: 'maintenanceServices' })
  findAll() {
    return this.maintenanceServicesService.findAll();
  }

  @Query(() => MaintenanceServiceType, { name: 'maintenanceService' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.maintenanceServicesService.findOne(id);
  }
}
