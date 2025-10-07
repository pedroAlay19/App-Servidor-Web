import { AppDataSource } from "../db/data-source";
import { ITicketPartRepository } from "../../domain/repositories/ITicket-PartRepository";
import { TicketPartEntity } from "../../domain/entities/ticket-part.entity";

export class TicketPartRepository implements ITicketPartRepository {
  private repo = AppDataSource.getRepository(TicketPartEntity);

  async findById(id: string): Promise<TicketPartEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<TicketPartEntity[]> {
    return this.repo.find();
  }

  async create(entity: TicketPartEntity): Promise<TicketPartEntity> {
    return this.repo.save(entity);
  }

  async update(entity: TicketPartEntity): Promise<TicketPartEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
