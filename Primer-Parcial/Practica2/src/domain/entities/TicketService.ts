import type Service = require("./Service");
import type Ticket = require("./Ticket");
import type User = require("./User");

export interface ITicketService {
  id: number;
  ticket: Ticket.ITicket; 
  service: Service.IService;
  technician: User.ITechnician;
  unitPrice: number; // precio del servicio en el momento
  discount?: number; // descuento aplicado
  subtotal: number; // calculado = (unitPrice - discount)
  status: "PENDING" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  imageUrl: string;
  notes: string;
}
