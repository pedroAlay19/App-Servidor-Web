import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTicketDto {
  @IsUUID()
  @IsNotEmpty()
  equipmentId: string;

  @IsString()
  @IsNotEmpty()
  problemDescription: string;

  @IsOptional()
  @IsString()
  diagnosis?: string;

  @IsNotEmpty()
  @IsNumber()
  estimatedCost: number; 
}
