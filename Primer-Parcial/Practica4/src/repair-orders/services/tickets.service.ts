import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../entities/repair-order.entity';
import { Repository } from 'typeorm';
import { EquipmentService } from 'src/equipment/equipment.service';
import { NotificationService } from './notification.service';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,

    private readonly notificationService: NotificationService,

    private readonly equipmentService: EquipmentService,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const equipmentFound = await this.equipmentService.findOne(
      createTicketDto.equipmentId,
    );
    const ticket = this.ticketRepository.create({
      ...createTicketDto,
      // equipment: equipmentFound,
    });
    return await this.ticketRepository.save(ticket);
  }

  async findAll() {
    return await this.ticketRepository.find({
      relations: [
        'equipment',
        'ticketServices',
        'ticketParts',
        'notifications',
        'reviews',
      ],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const ticketFound = await this.ticketRepository.findOne({
      where: { id },
      relations: [
        'equipment',
        'ticketServices',
        'ticketParts',
        'notifications',
        'reviews',
      ],
    });
    if (!ticketFound) throw new NotFoundException(`Ticket ${id} not found`);
    return ticketFound;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOne(id);

    if (updateTicketDto.status && updateTicketDto.status !== ticket.status) {
      await this.notificationService.create(ticket, updateTicketDto.status);
    }

    Object.assign(ticket, updateTicketDto);
    return await this.ticketRepository.save(ticket);
  }

  async remove(id: string) {
    const ticket = await this.findOne(id);
    await this.ticketRepository.remove(ticket);
  }

  async recalculateFinalCost(ticketId: string) {
    const ticket = await this.ticketRepository.findOne({
      where: { id: ticketId },
      relations: ['ticketServices', 'ticketParts'],
    });

    if (!ticket) throw new NotFoundException(`Ticket ${ticketId} not found`);

    const servicesTotal =
      ticket.ticketServices?.reduce(
        (sum, ts) => sum + Number(ts.subTotal),
        0,
      ) || 0;
    const partsTotal =
      ticket.ticketParts?.reduce((sum, tp) => sum + Number(tp.subTotal), 0) ||
      0;

    ticket.finalCost = servicesTotal + partsTotal;

    return await this.ticketRepository.save(ticket);
  }
}
