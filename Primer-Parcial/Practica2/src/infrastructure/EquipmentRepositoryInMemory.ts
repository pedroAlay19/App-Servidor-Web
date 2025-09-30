import { IEquipment } from "../domain/entities/Equipment";
import { IEquipmentRepository } from "../domain/repositories/IEquipmentRepository";
import { v4 as uuid4, UUIDTypes } from "uuid";

export class EquipmentRepositoryInMemory implements IEquipmentRepository {
  private equipments: IEquipment[] = [
  ];

  create(item: IEquipment, callback:(err: Error | null, service?: IEquipment) => void): void{
        setTimeout(() => {
            const newEquipment = {...item, id: uuid4()};
            this.equipments.push(newEquipment);
            callback(null, newEquipment);
        }, 1000);
  }

  update(id: UUIDTypes, item: Partial<IEquipment>): Promise<IEquipment> {
    return new Promise<IEquipment>((resolve, reject) => {
        const index = this.equipments.findIndex(s => s.id == id);
        if (index === -1) return reject(new Error(`Service with ${id} not found`));
        this.equipments[index] = {...this.equipments[index], ...item} as IEquipment;
        resolve(this.equipments[index]);
    })
  }

  async getAll(): Promise<IEquipment[]> {
    return this.equipments;
  }

  async delete(id: UUIDTypes): Promise<boolean> {
      const index = this.equipments.findIndex(s => s.id === id);
      if(index === -1) return false;
      this.equipments.slice(index, 1)
      return true;
  }

  getById(id: UUIDTypes): IEquipment {
      const equipment = this.equipments.find(e => e.id === id);
      if (!equipment) {
        throw new Error(`Service with id ${id} not found`);
      }
      return equipment;
    }
}