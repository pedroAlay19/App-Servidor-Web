import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TechnicianOrdersInput {
  @Field({ description: 'ID of the technician' })
  technicianId: string;

  @Field(() => Date, { description: 'Start date of the range' })
  startDate: Date;

  @Field(() => Date, { description: 'End date of the range' })
  endDate: Date;
}
