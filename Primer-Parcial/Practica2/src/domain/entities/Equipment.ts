import { UUIDTypes } from "uuid";

type EquipmentType = "PC" | "LAPTOP" | "CELLPHONE" | "CONSOLE" | "OTHER";
type EquipmentStatus = "RECEIVED" | "IN_REVIEW" | "IN_REPAIR" | "WAITING_PARTS" | "READY" | "DELIVERED";

// Luego los usamos en la interfaz
export interface IEquipment {
  id: UUIDTypes;
  type: EquipmentType;
  brand: string;
  model: string;
  serialNumber?: string;
  oobservations?: string; // Notas adicionales sobre el equipo
  createdAt: Date;
  currentStatus: EquipmentStatus;
}
