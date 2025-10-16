import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketService } from '../entities/repair-order-detail.entity';
import { Repository } from 'typeorm';
import { ServicesService } from 'src/services/services.service';
import { TicketsService } from './tickets.service';
import { CreateTicketServiceDto } from '../dto/create-ticket-service.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateTicketServiceDto } from '../dto/update-ticket-service.dto';

@Injectable()
export class TicketServiceService {
  constructor(
    @InjectRepository(TicketService)
    private readonly ticketServiceRepository: Repository<TicketService>,

    private readonly serviceService: ServicesService,

    private readonly ticketService: TicketsService,

    private readonly usersService: UsersService,
  ) {}

  async create(createTicketServiceDto: CreateTicketServiceDto) {
    // ojo
    const serviceFound = await this.serviceService.findOne(
      createTicketServiceDto.serviceId,
    );
    const ticketFound = await this.ticketService.findOne(
      createTicketServiceDto.ticketId,
    );
    const technicianFound = await this.usersService.findOne(
      createTicketServiceDto.technicianId,
    );

    const ticketService = this.ticketServiceRepository.create({
      ...createTicketServiceDto,
      service: serviceFound,
      ticket: ticketFound,
      technician: technicianFound,
      subTotal:
        createTicketServiceDto.unitPrice -
        (createTicketServiceDto.discount || 0),
    });

    const saved = await this.ticketServiceRepository.save(ticketService);
    await this.ticketService.recalculateFinalCost(ticketFound.id);
    return saved;
  }

  async findAll() {
    return await this.ticketServiceRepository.find({
      relations: ['ticket', 'service', 'technician'],
    });
  }

  async findOne(id: string) {
    const ticketServiceFound = await this.ticketServiceRepository.findOne({ where: { id }, relations: ['ticket', 'service', 'technician'] })
    if (!ticketServiceFound)
      throw new NotFoundException(`Ticket Service with ${id} not found`);
    return ticketServiceFound;
  }

  async update(id: string, updateTicketServiceDto: UpdateTicketServiceDto) {
    const ticketServiceFound = await this.ticketServiceRepository.findOne({
      where: { id },
      relations: ['ticket', 'service'],
    });
    if (!ticketServiceFound)
      throw new NotFoundException(`Ticket Service with ${id} not found`);

    Object.assign(ticketServiceFound, updateTicketServiceDto);

    if (
      updateTicketServiceDto.unitPrice != null ||
      updateTicketServiceDto.discount != null
    ) {
      const unitPrice =
        updateTicketServiceDto.unitPrice ?? ticketServiceFound.unitPrice;
      const discount =
        updateTicketServiceDto.discount ?? ticketServiceFound.discount;
      ticketServiceFound.subTotal = unitPrice - discount;
    }

    const saved = await this.ticketServiceRepository.save(ticketServiceFound);
    await this.ticketService.recalculateFinalCost(ticketServiceFound.ticket.id);
    return saved;
  }

  async remove(id: string) {
    const ticketServiceFound = await this.ticketServiceRepository.findOne({ where: { id }, relations: ['ticket'] });
    if (!ticketServiceFound) throw new NotFoundException(`Ticket Service with ${id} not found`);
    await this.ticketServiceRepository.delete(id);
    await this.ticketService.recalculateFinalCost(ticketServiceFound.ticket.id);
  }
}
