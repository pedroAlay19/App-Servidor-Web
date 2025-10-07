import { ITicketRepository } from "../../domain/repositories/ITicketRepository";
import { TicketEntity } from "../../domain/entities/ticket.entity";
import { EquipmentEntity } from "../../domain/entities/equipment.entity";
import { TicketStatus } from "../../domain/enums/ticket.enum";

export class TicketService {
  constructor(private readonly ticketRepository: ITicketRepository) {}

  async getAllTickets(): Promise<TicketEntity[]> {
    return this.ticketRepository.findAll();
  }

  async getTicketById(id: string): Promise<TicketEntity> {
    const ticket = await this.ticketRepository.findById(id);
    if (!ticket) throw new Error(`Ticket with ID '${id}' not found`);
    return ticket;
  }

  async createTicket(data: {
    equipment: EquipmentEntity;
    problemDescription: string;
  }): Promise<TicketEntity> {

    const newTicket = new TicketEntity();
    newTicket.problemDescription = data.problemDescription.trim();
    newTicket.status = TicketStatus.IN_PROGRESS;
    newTicket.equipment = data.equipment;

    return this.ticketRepository.create(newTicket);
  }

  async updateTicket(id: string, data: Partial<TicketEntity>): Promise<TicketEntity> {
    const existing = await this.getTicketById(id);

    if (data.problemDescription && data.problemDescription.trim().length < 3) {
      throw new Error("Description name must have at least 3 characters");
    }

    if (data.problemDescription) existing.problemDescription = data.problemDescription.trim();
    if (data.status) existing.status = data.status;
    if (data.equipment) existing.equipment = data.equipment;

    return this.ticketRepository.update(existing);
  }

  async deleteTicket(id: string): Promise<void> {
    await this.getTicketById(id);
    await this.ticketRepository.delete(id);
  }
}
