import { Module } from '@nestjs/common';
import { RepairOrdersService } from './repair-orders.service';
import { RepairOrdersController } from './repair-orders.controller';

@Module({
  controllers: [RepairOrdersController],
  providers: [RepairOrdersService],
})
export class RepairOrdersModule {}
