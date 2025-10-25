import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MaintenanceServiceType {

  @Field(() => ID) 
  id: string;

  @Field(() => String) 
  serviceName: string;

  @Field(() => String) 
  description: string;

  @Field(() => Number) 
  basePrice: number;

  @Field(() => Int) 
  estimatedTimeMinutes: number;

  @Field(() => Boolean) 
  requiresParts?: boolean;

  @Field(() => String) 
  type: string;

  @Field(() => Boolean) 
  active: boolean;
}
