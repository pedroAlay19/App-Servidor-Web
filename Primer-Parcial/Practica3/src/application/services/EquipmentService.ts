import { IEquipmentRepository } from "../../domain/repositories/IEquipmentRepository";
import { EquipmentEntity } from "../../domain/entities/equipment.entity";
import { EquipmentType } from "../../domain/enums/equipment.enum";

export class EquipmentService {
  constructor(private readonly equipmentRepository: IEquipmentRepository) {}

  async getAllEquipments(): Promise<EquipmentEntity[]> {
    return this.equipmentRepository.findAll();
  }

  async getEquipmentById(id: string): Promise<EquipmentEntity> {
    const equipment = await this.equipmentRepository.findById(id);
    if (!equipment) {
      throw new Error(`Equipment with ID '${id}' not found`);
    }
    return equipment;
  }

  async createEquipment(data: {
    name: string;
    type: EquipmentType;
    serialNumber: string;
    brand?: string;
    model?: string;
  }): Promise<EquipmentEntity> {
    if (!data.name || !data.serialNumber) {
      throw new Error("'name' and 'serialNumber' are required");
    }

    const newEquipment = new EquipmentEntity();
    newEquipment.name = data.name.trim();
    newEquipment.type = data.type;
    newEquipment.serialNumber = data.serialNumber.trim();
    newEquipment.brand = data.brand?.trim() || "";
    newEquipment.model = data.model?.trim() || "";

    return this.equipmentRepository.create(newEquipment);
  }

  async updateEquipment(id: string, data: Partial<EquipmentEntity>): Promise<EquipmentEntity> {
    const existing = await this.getEquipmentById(id);

    if (data.name && data.name.trim().length < 3) {
      throw new Error("Equipment name must have at least 3 characters");
    }

    if (data.name) existing.name = data.name.trim();
    if (data.serialNumber) existing.serialNumber = data.serialNumber.trim();
    if (data.brand) existing.brand = data.brand.trim();
    if (data.model) existing.model = data.model.trim();

    return this.equipmentRepository.update(existing);
  }

  async deleteEquipment(id: string): Promise<void> {
    await this.getEquipmentById(id); 
    await this.equipmentRepository.delete(id);
  }
}
