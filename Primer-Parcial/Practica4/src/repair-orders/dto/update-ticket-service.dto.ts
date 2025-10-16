import { IsEnum, IsOptional, IsString } from "class-validator";
import { CreateTicketServiceDto } from "./create-ticket-service.dto";
import { TicketServiceStatus } from "../../repair-orders/entities/enum/ticket.enum";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTicketServiceDto extends PartialType(CreateTicketServiceDto) {
    @IsOptional()
    @IsEnum(TicketServiceStatus)
    status: TicketServiceStatus;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}