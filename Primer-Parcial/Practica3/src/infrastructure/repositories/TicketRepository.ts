import { AppDataSource } from "../db/data-source";
import { TicketEntity } from "../../domain/entities/ticket.entity";
import { ITicketRepository } from "../../domain/repositories/ITicketRepository";

export class TicketRepository implements ITicketRepository {
  private repo = AppDataSource.getRepository(TicketEntity);

  async findById(id: string): Promise<TicketEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<TicketEntity[]> {
    return this.repo.find();
  }

  async create(entity: TicketEntity): Promise<TicketEntity> {
    return this.repo.save(entity);
  }

  async update(entity: TicketEntity): Promise<TicketEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
