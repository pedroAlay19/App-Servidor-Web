import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { TechnicianType } from './types/technician.type';
import { firstValueFrom } from 'rxjs';
import { SparePartType } from 'src/spare-parts/types/spare-part.type';

@Injectable()
export class TechniciansService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get<TechnicianType[]>('/users/technician'),
    );
    return response.data;
  }

  async findOne(id: number) {
    const response = await firstValueFrom(
      this.httpService.get<SparePartType>(`/users/${id}`),
    );
    return response.data;
  }
}
