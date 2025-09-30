import { IEquipment } from "../domain/entities/Equipment";
import { IEquipmentRepository } from "../domain/repositories/IEquipmentRepository";
import { v4 as uuid } from "uuid";

export class EquipmentService {
  constructor(private equipmentRepo: IEquipmentRepository) {}

  createEquipment(data: Omit<IEquipment, "id" | "createdAt">): Promise<IEquipment> {
    const newEquipment: IEquipment = {
      ...data,
      createdAt: new Date(),
      id: uuid()
    };

    return new Promise((resolve, reject) => {
      this.equipmentRepo.create(newEquipment, (err, equipment) => {
        if (err) return reject(err);
        resolve(equipment!);
      });
    });
  }
}
