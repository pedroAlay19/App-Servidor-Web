import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { TicketStatus } from '../../repair-orders/entities/enum/ticket.enum';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @IsOptional()
  @IsNumber()
  finalCost?: number;

  @IsOptional()
  @IsDateString()
  warrantyStartDate?: Date;

  @IsOptional()
  @IsDateString()
  warrantyEndDate?: Date;

  @IsOptional()
  @IsEnum(TicketStatus)
  status: TicketStatus;
}
