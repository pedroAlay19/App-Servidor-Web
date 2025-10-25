import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { MaintenanceServiceType } from './types/maintenance-service.type';


@Injectable()
export class MaintenanceServicesService {

  constructor(
    private readonly httpService: HttpService
  ){}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get<MaintenanceServiceType[]>('/services')
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get<MaintenanceServiceType>(`/services/${id}`)
    );
    return response.data;
  }
}
