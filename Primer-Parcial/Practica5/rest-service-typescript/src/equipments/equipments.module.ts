import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './entities/equipment.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment]),
            UsersModule],
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  exports: [EquipmentsService]
})
export class EquipmentsModule {}
