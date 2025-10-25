import { Field, Int, ObjectType } from "@nestjs/graphql";
import { MaintenanceServiceType } from "src/maintenance-services/types/maintenance-service.type";

@ObjectType()
export class MostRequestedServiceType {
  @Field(() => MaintenanceServiceType)
  service: MaintenanceServiceType;

  @Field(() => Int)
  totalRequests: number;
}