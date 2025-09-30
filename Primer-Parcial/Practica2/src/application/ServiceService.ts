import { IService } from "../domain/entities/Service";
import { IServiceRepository } from "../domain/repositories/IServiceRepository";
import { v4 as uuid4 } from "uuid";

export class ServiceService {
  constructor(private serviceRepo: IServiceRepository) {}

  createService(data: Omit<IService, "id">): Promise<IService> {
    const newService: IService = {
      ...data,
      id: uuid4(),
    };

    return new Promise((resolve, reject) => {
      this.serviceRepo.create(newService, (err, service) => {
        if (err) return reject(err);
        resolve(service!);
      });
    });
  }

  async updateService(id: string, updates: Partial<IService>): Promise<IService | null> {
    return this.serviceRepo.update(id, updates);
  }

  async listActiveServices(): Promise<IService[]> {
    const all = await this.serviceRepo.getAll();
    return all.filter(s => s.active);
  }
}
