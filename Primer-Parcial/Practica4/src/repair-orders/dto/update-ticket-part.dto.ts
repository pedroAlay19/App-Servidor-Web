import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketPartDto } from './create-ticket-part.dto';

export class UpdateTicketPartDto extends PartialType(CreateTicketPartDto) {

}
