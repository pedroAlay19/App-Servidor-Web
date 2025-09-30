import { UUIDTypes } from "uuid";
import type { IEquipment } from "./Equipment";
import type { IService } from "./Service";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";

export interface ITicket {
  id: UUIDTypes;
  equipment: IEquipment;
  service: IService;
  problemDescription: string;
  diagnosis?: string;
  estimatedCost?: number;
  finalCost?: number;
  warrantyStartDate?: number; // Meses de garantía
  warrantyEndDate?: number; // Meses de garantía
  status: TicketStatus;
}
