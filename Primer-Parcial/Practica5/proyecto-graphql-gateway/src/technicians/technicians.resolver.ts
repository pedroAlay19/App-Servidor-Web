import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { TechniciansService } from './technicians.service';
import { TechnicianType } from './types/technician.type';

@Resolver(() => TechnicianType)
export class TechniciansResolver {
  constructor(private readonly techniciansService: TechniciansService) {}

  @Query(() => [TechnicianType], { name: 'technicians' })
  findAll() {
    return this.techniciansService.findAll();
  }

  @Query(() => TechnicianType, { name: 'technician' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.techniciansService.findOne(id);
  }
}
