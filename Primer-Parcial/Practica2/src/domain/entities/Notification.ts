import type { ITicket } from "./Ticket";

// Notificaciones enviadas a clientes sobre el estado de sus tickets
export interface INotification {
  id: number;
  ticket: ITicket;
  title: string;
  message: string;
  sentAt: Date;
  status: "SENT" | "READ";
  type: string;
}
