import { Module } from '@nestjs/common';
import { AnalyticsResolver } from './analytics.resolver';
import { RepairOrdersService } from 'src/repair-orders/repair-orders.service';
import { MaintenanceServicesService } from 'src/maintenance-services/maintenance-services-rest.service';
import { TechniciansService } from 'src/technicians/technicians.service';
import { RepairOrdersModule } from 'src/repair-orders/repair-orders.module';
import { MaintenanceServicesModule } from 'src/maintenance-services/maintenance-services.module';
import { TechniciansModule } from 'src/technicians/technicians.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
        baseURL: 'http://localhost:3000',
      }),
      RepairOrdersModule, 
      MaintenanceServicesModule, 
      TechniciansModule],
  providers: [AnalyticsResolver, RepairOrdersService, MaintenanceServicesService, TechniciansService],
})
export class AnalyticsModule {}
