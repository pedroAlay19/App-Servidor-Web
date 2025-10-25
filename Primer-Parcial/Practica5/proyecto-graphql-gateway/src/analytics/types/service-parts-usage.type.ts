import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MaintenanceServiceType } from '../../maintenance-services/types/maintenance-service.type';
import { SparePartType } from '../../spare-parts/types/spare-part.type';

@ObjectType()
export class PartUsageType {
  @Field(() => SparePartType, { description: 'Spare part information' })
  part: SparePartType;

  @Field(() => Int, { description: 'Total quantity of this part used for the service' })
  totalUsed: number;
}

@ObjectType()
export class ServicePartsUsageType {
  @Field(() => MaintenanceServiceType, { description: 'Maintenance service information' })
  service: MaintenanceServiceType;

  @Field(() => [PartUsageType], { description: 'List of parts used for this service' })
  partsUsed: PartUsageType[];
}
