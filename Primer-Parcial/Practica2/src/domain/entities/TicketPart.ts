import type Part = require("./Part");
import type Ticket = require("./Ticket");
// Esta entiedad solo existe si en un servicio se require de una pieza o repuesto
export interface ITicketPart {
  id: number;
  ticket: Ticket.ITicket; 
  part: Part.IPart; 
  quantity: number;
  subtotal: number; // Costo total por la cantidad de piezas usadas (unitPrice * quantity)
  imgUrl?: string; // URL de la imagen de la pieza usada
}