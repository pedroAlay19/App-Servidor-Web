import { IEquipmentRepository } from "../../domain/repositories/IEquipmentRepository";
import { AppDataSource } from "../db/data-source";
import { EquipmentEntity } from "../../domain/entities/equipment.entity";

export class EquipmentRepository implements IEquipmentRepository {
  private repo = AppDataSource.getRepository(EquipmentEntity);

  async findById(id: string): Promise<EquipmentEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<EquipmentEntity[]> {
    return this.repo.find();
  }

  async create(entity: EquipmentEntity): Promise<EquipmentEntity> {
    return this.repo.save(entity);
  }

  async update(entity: EquipmentEntity): Promise<EquipmentEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
