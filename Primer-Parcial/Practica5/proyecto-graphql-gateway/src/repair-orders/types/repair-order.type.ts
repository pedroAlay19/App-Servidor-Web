import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RepairOrderDetailType } from './repair-order-detail.type';
import { RepairOrderPartType } from './repair-order-part.type';

@ObjectType()
export class RepairOrderType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  problemDescription: string;

  @Field(() => Number)
  estimatedCost: number;

  @Field(() => Number)
  finalCost: number;

  @Field(() => Date)
  warrantyStartDate: Date;

  @Field(() => Date)
  warrantyEndDate: Date;

  @Field(() => String)
  status: string;

  @Field(() => [RepairOrderDetailType], { nullable: true })
  repairOrderDetails: RepairOrderDetailType[];

  @Field(() => [RepairOrderPartType], { nullable: true })
  repairOrderParts?: RepairOrderPartType[];

  @Field(() => Date)
  createdAt: Date;
}
