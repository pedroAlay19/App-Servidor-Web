import { ObjectType, Field } from '@nestjs/graphql';
import { TechnicianType } from 'src/technicians/types/technician.type';

@ObjectType()
export class TechnicianAverageDiscountType {
  @Field(() => TechnicianType)
  technician: TechnicianType;

  @Field(() => Number)
  averageDiscount: number;
}
