import { ITicket } from "../domain/entities/Ticket";
import { ITicketRepository } from "../domain/repositories/ITicketRepository";
import { IEquipmentRepository } from "../domain/repositories/IEquipmentRepository";
import { IServiceRepository } from "../domain/repositories/IServiceRepository";
import { v4 as uuid4 } from "uuid";

export class TicketService {
  constructor(
    private ticketRepo: ITicketRepository,
    private equipmentRepo: IEquipmentRepository,
    private serviceRepo: IServiceRepository
  ) {}

  createTicket({ equipment, service, problemDescription }: ITicket): Promise<ITicket> {
    return new Promise((resolve, reject) => {
      const newTicket: ITicket = {
        id: uuid4(),
        equipment,
        service,
        problemDescription,
        status: "OPEN",
      };

      this.ticketRepo.create(newTicket, (err, ticket) => {
        if (err) return reject(err);
        resolve(ticket!);
      });
    });
  }

  async getTickets (): Promise<ITicket[]> {
    return this.ticketRepo.getAll();
  }
}
