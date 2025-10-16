import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TicketPart } from '../entities/repair-order-part.entity';
import { CreateTicketPartDto } from '../dto/create-ticket-part.dto';
import { UpdateTicketPartDto } from '../dto/update-ticket-part.dto';
import { PartService } from '../../inventory/services/part.service';
import { TicketsService } from './tickets.service';

@Injectable()
export class TicketPartService {
  constructor(
    @InjectRepository(TicketPart)
    private readonly ticketPartRepository: Repository<TicketPart>,

    private readonly ticketService: TicketsService,

    private readonly partService: PartService,
  ) {}

  async create(createTicketPartDto: CreateTicketPartDto) {
    const ticket = await this.ticketService.findOne(
      createTicketPartDto.ticketId,
    );
    const part = await this.partService.findOne(createTicketPartDto.partId);

    const ticketPart = this.ticketPartRepository.create({
      ticket,
      part,
      subTotal: part.unitPrice * createTicketPartDto.quantity,
    });

    const saved = await this.ticketPartRepository.save(ticketPart);
    await this.ticketService.recalculateFinalCost(ticket.id);
    return saved;
  }

  async update(id: string, updateTicketPartDto: UpdateTicketPartDto) {
    const ticketPartFound = await this.ticketPartRepository.findOne({
      where: { id },
      relations: ['part', 'ticket'],
    });

    if (!ticketPartFound)
      throw new NotFoundException(`TicketPart ${id} no encontrado`);

    Object.assign(ticketPartFound, updateTicketPartDto);

    if (
      updateTicketPartDto.quantity != null ||
      updateTicketPartDto.partId != null
    ) {
      const part = updateTicketPartDto.partId
        ? await this.partService.findOne(updateTicketPartDto.partId)
        : ticketPartFound.part;

      ticketPartFound.part = part;
      ticketPartFound.subTotal = part.unitPrice * ticketPartFound.quantity;
    }
    const saved = await this.ticketPartRepository.save(ticketPartFound);
    await this.ticketService.recalculateFinalCost(ticketPartFound.ticket.id);
    return saved;
  }

  async remove(id: string) {
    const ticketPart = await this.ticketPartRepository.findOne({
      where: { id },
      relations: ['ticket'],
    });
    if (!ticketPart) throw new NotFoundException(`TicketPart ${id} not found`);
    await this.ticketPartRepository.delete(id);
    await this.ticketService.recalculateFinalCost(ticketPart.ticket.id);
  }
}
