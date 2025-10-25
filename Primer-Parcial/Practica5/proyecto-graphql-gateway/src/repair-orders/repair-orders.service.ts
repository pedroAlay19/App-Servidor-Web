import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RepairOrderType } from './types/repair-order.type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RepairOrdersService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get<RepairOrderType[]>('/repair-orders'),
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get<RepairOrderType>(`/repair-orders/${id}`),
    );
    return response.data;
  }
}
