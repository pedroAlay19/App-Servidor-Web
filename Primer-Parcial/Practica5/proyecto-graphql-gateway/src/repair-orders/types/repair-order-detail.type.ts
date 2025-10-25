import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { MaintenanceServiceType } from '../../maintenance-services/types/maintenance-service.type';
import { TechnicianType } from '../../technicians/types/technician.type';

@ObjectType()
export class RepairOrderDetailType {
  @Field(() => ID)
  id: string;

  @Field(() => MaintenanceServiceType)
  service: MaintenanceServiceType;

  @Field(() => TechnicianType)
  technician: TechnicianType;

  @Field(() => Float)
  unitPrice: number;

  @Field(() => Float)
  discount: number;

  @Field(() => Float)
  subTotal: number;

  @Field(() => String)
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
