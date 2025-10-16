import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateTicketPartDto {
  @IsNotEmpty()
  @IsUUID()
  ticketId: string;

  @IsUUID()
  @IsNotEmpty()
  partId: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  quantity: number;

  @IsOptional()
  @IsString()
  imgUrl?: string;
}
