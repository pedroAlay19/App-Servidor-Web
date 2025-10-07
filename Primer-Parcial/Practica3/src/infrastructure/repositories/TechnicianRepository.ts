import { AppDataSource } from "../db/data-source";
import { ITechnicianRepository } from "../../domain/repositories/ITechnicianRepository";
import { TechnicianEntity } from "../../domain/entities/technician.entity";

export class TechnicianRepository implements ITechnicianRepository {
  private repo = AppDataSource.getRepository(TechnicianEntity);

  async findById(technicianId: string): Promise<TechnicianEntity | null> {
    return this.repo.findOneBy({ technicianId });
  }

  async findAll(): Promise<TechnicianEntity[]> {
    return this.repo.find();
  }

  async create(entity: TechnicianEntity): Promise<TechnicianEntity> {
    return this.repo.save(entity);
  }

  async update(entity: TechnicianEntity): Promise<TechnicianEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}