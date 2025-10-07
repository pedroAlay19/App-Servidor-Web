import { TicketPartEntity } from "../../domain/entities/ticket-part.entity";
import { ITicketPartRepository } from "../../domain/repositories/ITicket-PartRepository";

export class TicketPartService {
  constructor(private readonly ticketPartRepository: ITicketPartRepository) {}

  async getAll(): Promise<TicketPartEntity[]> {
    return this.ticketPartRepository.findAll();
  }

  async getById(id: string): Promise<TicketPartEntity> {
    const tp = await this.ticketPartRepository.findById(id);
    if (!tp) throw new Error("Ticket part not found");
    return tp;
  }

  async create(data: Partial<TicketPartEntity>): Promise<TicketPartEntity> {
    if (!data.ticket || !data.part || !data.quantity) {
      throw new Error("Missing required ticket part data");
    }

    const ticketPart = new TicketPartEntity();
    Object.assign(ticketPart, data);
    return this.ticketPartRepository.create(ticketPart);
  }

  async update(id: string, data: Partial<TicketPartEntity>): Promise<TicketPartEntity> {
    const existing = await this.getById(id);
    Object.assign(existing, data);
    return this.ticketPartRepository.update(existing);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.ticketPartRepository.delete(id);
  }
}
