import { AppDataSource } from "../db/data-source";
import { IPartRepository } from "../../domain/repositories/IPartRepository";
import { PartEntity } from "../../domain/entities/part.entity";

export class PartRepository implements IPartRepository {
  private repo = AppDataSource.getRepository(PartEntity);

  async findById(id: string): Promise<PartEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<PartEntity[]> {
    return this.repo.find();
  }

  async create(entity: PartEntity): Promise<PartEntity> {
    return this.repo.save(entity);
  }

  async update(entity: PartEntity): Promise<PartEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
