import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaintenanceServicesService } from './maintenance-services.service';
import { CreateMaintenanceServiceDto } from './dto/create-maintenance-service.dto';
import { UpdateMaintenanceServiceDto } from './dto/update-maintenance-service.dto';

@Controller('services')
export class MaintenanceServicesController {
  constructor(
    private readonly maintenanceSService: MaintenanceServicesService,
  ) {}

  @Post()
  create(@Body() createServiceDto: CreateMaintenanceServiceDto) {
    return this.maintenanceSService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.maintenanceSService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maintenanceSService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateMaintenanceServiceDto) {
    return this.maintenanceSService.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maintenanceSService.remove(id);
  }
}
