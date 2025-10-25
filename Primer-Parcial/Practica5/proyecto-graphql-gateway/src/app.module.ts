import { ApolloDriver } from '@nestjs/apollo';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RepairOrdersModule } from './repair-orders/repair-orders.module';
import { TechniciansModule } from './technicians/technicians.module';
import { MaintenanceServicesModule } from './maintenance-services/maintenance-services.module';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false, // Apollo Playground
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    HttpModule,
    RepairOrdersModule,
    TechniciansModule,
    MaintenanceServicesModule,
    SparePartsModule,
    AnalyticsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
