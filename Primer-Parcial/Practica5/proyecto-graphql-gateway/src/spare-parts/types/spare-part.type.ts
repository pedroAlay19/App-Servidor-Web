import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { RepairOrderPartType } from '../../repair-orders/types/repair-order-part.type';

@ObjectType()
export class SparePartType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Float)
  unitPrice: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [RepairOrderPartType], { nullable: true })
  repairOrderParts?: RepairOrderPartType[];
}
