import { AppDataSource } from "../db/data-source";
import { ServiceEntity } from "../../domain/entities/service.entity";
import { IServiceRepository } from "../../domain/repositories/IServiceRepository";

export class ServiceRepository implements IServiceRepository {
  private repo = AppDataSource.getRepository(ServiceEntity);

  async findById(id: string): Promise<ServiceEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<ServiceEntity[]> {
    return this.repo.find();
  }

  async create(entity: ServiceEntity): Promise<ServiceEntity> {
    return this.repo.save(entity);
  }

  async update(entity: ServiceEntity): Promise<ServiceEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
