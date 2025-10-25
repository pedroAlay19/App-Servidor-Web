import { ObjectType, Field } from '@nestjs/graphql';
import { MaintenanceServiceType } from 'src/maintenance-services/types/maintenance-service.type';

@ObjectType()
export class ServiceMonthlyRevenueType {
  @Field(() => Date)
  month: Date;

  @Field(() => Number)
  totalRevenue: number;
}

@ObjectType()
export class ServiceRevenueTrendType {
  @Field(() => MaintenanceServiceType)
  service: MaintenanceServiceType;

  @Field(() => [ServiceMonthlyRevenueType])
  monthlyRevenue: ServiceMonthlyRevenueType[];
}
