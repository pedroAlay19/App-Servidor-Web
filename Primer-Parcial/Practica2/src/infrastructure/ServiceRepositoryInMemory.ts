import type {IService} from "../domain/entities/Service";
import type {IServiceRepository} from "../domain/repositories/IServiceRepository";
import { v4 as uuid4, UUIDTypes } from "uuid";

export class ServiceRepositoryInMemory implements IServiceRepository {
  private services: IService[] = [
  ];

  create(item: IService, callback:(err: Error | null, service?: IService) => void): void{
        setTimeout(() => {
            const newService = {...item, id: uuid4()};
            this.services.push(newService);
            callback(null, newService);
        }, 1000);
  }

  update(id: UUIDTypes, item: Partial<IService>): Promise<IService> {
    return new Promise<IService>((resolve, reject) => {
        const index = this.services.findIndex(s => s.id == id);
        if (index === -1) return reject(new Error(`Service with ${id} not found`));
        this.services[index] = {...this.services[index], ...item} as IService;
        resolve(this.services[index]);
    })
  }

  async getAll(): Promise<IService[]> {
    return this.services;
  }

  async delete(id: UUIDTypes): Promise<boolean> {
      const index = this.services.findIndex(s => s.id === id);
      if(index === -1) return false;
      this.services.slice(index, 1)
      return true;
  }

  getById(id: UUIDTypes): IService {
    const service = this.services.find(s => s.id === id);
    if (!service) {
      throw new Error(`Service with id ${id} not found`);
    }
    return service
  }
}