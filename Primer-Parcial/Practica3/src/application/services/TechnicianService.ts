import { TechnicianEntity } from "../../domain/entities/technician.entity";
import { ITechnicianRepository } from "../../domain/repositories/ITechnicianRepository";

export class TechnicianService {
  constructor(private readonly technicianRepository: ITechnicianRepository) {}

  async getAll(): Promise<TechnicianEntity[]> {
    return this.technicianRepository.findAll();
  }

  async getById(id: string): Promise<TechnicianEntity> {
    const tech = await this.technicianRepository.findById(id);
    if (!tech) throw new Error("Technician not found");
    return tech;
  }

  async create(data: Partial<TechnicianEntity>): Promise<TechnicianEntity> {
    if (!data.user || !data.specialty || !data.state) {
      throw new Error("Missing required technician data");
    }

    const technician = new TechnicianEntity();
    Object.assign(technician, data);
    technician.experienceYears = data.experienceYears ?? 0;

    return this.technicianRepository.create(technician);
  }

  async update(id: string, data: Partial<TechnicianEntity>): Promise<TechnicianEntity> {
    const existing = await this.getById(id);
    Object.assign(existing, data);
    return this.technicianRepository.update(existing);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.technicianRepository.delete(id);
  }
}
