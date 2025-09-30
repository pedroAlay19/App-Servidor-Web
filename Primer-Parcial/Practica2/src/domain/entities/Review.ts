import type { ITicket } from "./Ticket";
// Reseñas de clientes sobre el servicio recibido
export interface IReview {
  id: number;
  ticket: ITicket;
  rating: number; // 1–5
  comment?: string;
  createdAt: Date;
}
