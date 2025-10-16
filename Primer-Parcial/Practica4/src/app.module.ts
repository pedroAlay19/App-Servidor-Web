import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
// import { ServicesModule } from './services/services.module';
// import { InventoryModule } from './inventory/inventory.module';
// import { TicketsModule } from './tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipments/entities/equipment.entity';
import { MaintenanceServicesModule } from './maintenance-services/maintenance-services.module';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { RepairOrdersModule } from './repair-orders/repair-orders.module';
import { EquipmentsModule } from './equipments/equipments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'testdb',
      entities: [Equipment],
      synchronize: true,
    }),
    EquipmentModule,
    MaintenanceServicesModule,
    SparePartsModule,
    RepairOrdersModule,
    EquipmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}