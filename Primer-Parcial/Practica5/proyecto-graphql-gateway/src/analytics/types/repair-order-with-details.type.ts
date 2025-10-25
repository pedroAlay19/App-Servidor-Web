import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class RepairOrderServiceDetailType {
  @Field({ description: 'Name of the maintenance service performed' })
  serviceName: string;

  @Field({ description: 'Technician assigned to perform this service' })
  technicianName: string;

  @Field(() => Float, { description: 'Subtotal for this service' })
  subTotal: number;
}

@ObjectType()
export class RepairOrderWithDetailsType {
  @Field({ description: 'Unique identifier of the repair order' })
  id: string;

  @Field({ description: 'Problem description reported by the customer' })
  problemDescription: string;

  @Field({ description: 'Current status of the repair order' })
  status: string;

  @Field(() => [RepairOrderServiceDetailType], {
    description: 'List of services and technicians assigned to this order',
    nullable: true,
  })
  serviceDetails?: RepairOrderServiceDetailType[];
}
