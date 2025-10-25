import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DateRangeInput {
  @Field(() => Date, { description: 'Start date for the report' })
  startDate: Date;

  @Field(() => Date, { description: 'End date for the report' })
  endDate: Date;
}
