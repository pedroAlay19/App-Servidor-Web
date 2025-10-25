import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { SparePartType } from '../../spare-parts/types/spare-part.type';

@ObjectType()
export class RepairOrderPartType {
  @Field(() => ID)
  id: string;

  @Field(() => SparePartType)
  part: SparePartType;

  @Field(() => Int)
  quantity: number;

  @Field(() => Number)
  subTotal: number;

  @Field(() => String)
  notes: string

  @Field()
  createdAt: Date;
}
