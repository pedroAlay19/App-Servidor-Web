import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { RepairOrdersService } from './repair-orders.service';
import { RepairOrderType } from './types/repair-order.type';

@Resolver(() => RepairOrderType)
export class RepairOrdersResolver {
  constructor(private readonly repairOrdersService: RepairOrdersService) {}

  @Query(() => [RepairOrderType], { name: 'repairOrders' })
  findAll() {
    return this.repairOrdersService.findAll();
  }

  @Query(() => RepairOrderType, { name: 'repairOrder' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.repairOrdersService.findOne(id);
  }
}
