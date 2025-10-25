import { Module } from '@nestjs/common';
import { TechniciansService } from './technicians.service';
import { TechniciansResolver } from './technicians.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    baseURL: 'http://localhost:3000'
  })],
  providers: [TechniciansResolver, TechniciansService],
  exports: [TechniciansService]
})
export class TechniciansModule {}
