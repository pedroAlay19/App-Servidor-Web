import { ObjectType, Field } from '@nestjs/graphql';
import { MaintenanceServiceType } from 'src/maintenance-services/types/maintenance-service.type';

@ObjectType()
export class AverageCostPerServiceType {
  @Field(() => MaintenanceServiceType)
  service: MaintenanceServiceType;

  @Field(() => Number)
  averageCost: number;
}
