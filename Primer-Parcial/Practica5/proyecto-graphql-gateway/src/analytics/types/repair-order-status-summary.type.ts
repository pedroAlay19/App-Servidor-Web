import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RepairOrderStatusSummaryType {
  @Field(() => Int)
  open: number;

  @Field(() => Int)
  inProgress: number;

  @Field(() => Int)
  resolved: number;

  @Field(() => Int)
  closed: number;
}
