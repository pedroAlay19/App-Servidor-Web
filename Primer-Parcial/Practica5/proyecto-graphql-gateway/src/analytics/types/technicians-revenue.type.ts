import { Field, ObjectType } from "@nestjs/graphql";
import { TechnicianType } from "src/technicians/types/technician.type";

@ObjectType()
export class TechnicianRevenueType {
  @Field(() => TechnicianType)
  technician: TechnicianType;

  @Field(() => Number)
  totalRevenue: number;
}