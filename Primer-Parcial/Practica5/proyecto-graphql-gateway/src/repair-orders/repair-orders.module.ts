import { Module } from '@nestjs/common';
import { RepairOrdersService } from './repair-orders.service';
import { RepairOrdersResolver } from './repair-orders.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:3000',
    }),
  ],
  providers: [RepairOrdersResolver, RepairOrdersService],
  exports: [RepairOrdersService],
})
export class RepairOrdersModule {}
