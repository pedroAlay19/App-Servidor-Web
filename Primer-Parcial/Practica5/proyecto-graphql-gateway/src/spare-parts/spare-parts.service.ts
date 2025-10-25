import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SparePartType } from './types/spare-part.type';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SparePartsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const response = await firstValueFrom(
      this.httpService.get<SparePartType[]>('/spare-parts'),
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get<SparePartType>(`/repair-orders/${id}`),
    );
    return response.data;
  }

  async partsRestockRecommendation(threshold: number): Promise<SparePartType[]> {
    const allParts = await this.findAll();
    return allParts.filter(part => part.stock < threshold);
  }
}
