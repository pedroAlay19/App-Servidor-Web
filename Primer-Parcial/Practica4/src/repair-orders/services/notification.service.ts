import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NotificationE } from '../entities/repair-order-notification.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from '../entities/repair-order.entity';
import { TicketStatus } from '../entities/enum/ticket.enum';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationE)
    private readonly notificationRepository: Repository<NotificationE>,
  ) {}

  async create(ticket: Ticket, status: TicketStatus): Promise<NotificationE> {
    const map = {
      [TicketStatus.OPEN]: {
        title: 'Ticket abierto',
        message: 'Se ha creado un nuevo ticket de reparación.',
      },
      [TicketStatus.IN_PROGRESS]: {
        title: 'En progreso',
        message: 'La reparación ha comenzado.',
      },
      [TicketStatus.RESOLVED]: {
        title: 'Ticket resuelto',
        message: 'La reparación ha sido completada.',
      },
      [TicketStatus.CLOSED]: {
        title: 'Ticket cerrado',
        message: 'El ticket ha sido cerrado.',
      },
    };

    const { title, message } = map[status];

    const notification = this.notificationRepository.create({
      ticket,
      title,
      message,
    });

    return await this.notificationRepository.save(notification);
  }
}
