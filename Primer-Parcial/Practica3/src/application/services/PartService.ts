import { PartEntity } from "../../domain/entities/part.entity";
import { IPartRepository } from "../../domain/repositories/IPartRepository";

export class PartService {
  constructor(private readonly partRepository: IPartRepository) {}

  async getAll(): Promise<PartEntity[]> {
    return this.partRepository.findAll();
  }

  async getById(id: string): Promise<PartEntity> {
    const part = await this.partRepository.findById(id);
    if (!part) throw new Error("Part not found");
    return part;
  }

  async create(data: Partial<PartEntity>): Promise<PartEntity> {
    if (!data.name || !data.stock || !data.unitPrice) {
      throw new Error("Missing required fields for part");
    }

    const part = new PartEntity();
    Object.assign(part, data);
    return this.partRepository.create(part);
  }

  async update(id: string, data: Partial<PartEntity>): Promise<PartEntity> {
    const existing = await this.getById(id);
    Object.assign(existing, data);
    return this.partRepository.update(existing);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.partRepository.delete(id);
  }
}
