import { Module } from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services-rest.service';
import { MaintenanceServicesResolver } from './maintenance-services.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    baseURL: 'http://localhost:3000'
  })],
  providers: [MaintenanceServicesResolver, MaintenanceServicesService],
  exports: [MaintenanceServicesService]
})
export class MaintenanceServicesModule {}
