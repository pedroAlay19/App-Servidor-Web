import { AppDataSource } from "../db/data-source";
import { TicketServiceEntity } from "../../domain/entities/ticket-service.entity";
import { ITicketServiceRepository } from "../../domain/repositories/ITicketServiceRepository";

export class TicketServiceRepository implements ITicketServiceRepository {
  private repo = AppDataSource.getRepository(TicketServiceEntity);

  async findById(id: string): Promise<TicketServiceEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<TicketServiceEntity[]> {
    return this.repo.find();
  }

  async create(entity: TicketServiceEntity): Promise<TicketServiceEntity> {
    return this.repo.save(entity);
  }

  async update(entity: TicketServiceEntity): Promise<TicketServiceEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
