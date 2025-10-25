import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RepairOrderDetailType } from '../../repair-orders/types/repair-order-detail.type';

@ObjectType()
export class TechnicianType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  specialty: string;

  @Field(() => [RepairOrderDetailType], { nullable: true })
  ticketServices: RepairOrderDetailType[];
}
