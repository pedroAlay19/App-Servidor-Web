import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MaintenanceServiceType } from 'src/maintenance-services/types/maintenance-service.type';
import { TechnicianType } from 'src/technicians/types/technician.type';
import { SparePartType } from 'src/spare-parts/types/spare-part.type';

@ObjectType()
export class PartUsageSummaryType {
  @Field(() => MaintenanceServiceType)
  service: MaintenanceServiceType;

  @Field(() => TechnicianType)
  technician: TechnicianType;

  @Field(() => SparePartType)
  part: SparePartType;

  @Field(() => Int)
  totalUsed: number;
}
