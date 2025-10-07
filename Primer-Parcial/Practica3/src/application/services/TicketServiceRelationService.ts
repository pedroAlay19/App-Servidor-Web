import { ITicketServiceRepository } from "../../domain/repositories/ITicketServiceRepository";
import { TicketServiceEntity } from "../../domain/entities/ticket-service.entity";
import { TicketEntity } from "../../domain/entities/ticket.entity";
import { ServiceEntity } from "../../domain/entities/service.entity";
import { TicketServiceStatus } from "../../domain/enums/ticket.enum";

export class TicketServiceRelationService {
  constructor(private readonly ticketServiceRepository: ITicketServiceRepository) {}

  async getAllRelations(): Promise<TicketServiceEntity[]> {
    return this.ticketServiceRepository.findAll();
  }

  async getRelationById(id: string): Promise<TicketServiceEntity> {
    const relation = await this.ticketServiceRepository.findById(id);
    if (!relation) throw new Error(`Ticket-Service relation '${id}' not found`);
    return relation;
  }

  async createRelation(data: { ticket: TicketEntity; service: ServiceEntity }): Promise<TicketServiceEntity> {
    if (!data.ticket || !data.service) {
      throw new Error("'ticket' and 'service' are required");
    }

    const relation = new TicketServiceEntity();
    relation.ticket = data.ticket;
    relation.service = data.service;
    relation.unitPrice = 12.5;
    relation.discount = 5;
    relation.subTotal = 12;
    relation.status = TicketServiceStatus.PENDING;


    return this.ticketServiceRepository.create(relation);
  }

  async updateRelation(id: string, data: {status: TicketServiceStatus}): Promise<TicketServiceEntity> {
    const existing = await this.getRelationById(id);

    if (data.status) existing.status = data.status;

    return this.ticketServiceRepository.update(existing);
  }

  async deleteRelation(id: string): Promise<void> {
    await this.getRelationById(id);
    await this.ticketServiceRepository.delete(id);
  }
}
