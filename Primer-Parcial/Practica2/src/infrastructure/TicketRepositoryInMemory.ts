import { v4 as uuid4, UUIDTypes } from "uuid";
import { ITicketRepository } from "../domain/repositories/ITicketRepository";
import { ITicket } from "../domain/entities/Ticket";

export class TicketRepositoryInMemory implements ITicketRepository {
  private tickets: ITicket[] = [
  ];

  create(item: ITicket, callback:(err: Error | null, service?: ITicket) => void): void{
        setTimeout(() => {
            const newTicket = {...item, id: uuid4()};
            this.tickets.push(newTicket);
            callback(null, newTicket);
        }, 1000);
  }

  update(id: UUIDTypes, item: Partial<ITicket>): Promise<ITicket> {
    return new Promise<ITicket>((resolve, reject) => {
        const index = this.tickets.findIndex(s => s.id == id);
        if (index === -1) return reject(new Error(`Service with ${id} not found`));
        this.tickets[index] = {...this.tickets[index], ...item} as ITicket;
        resolve(this.tickets[index]);
    })
  }

  async getAll(): Promise<ITicket[]> {
    return this.tickets;
  }

  async delete(id: UUIDTypes): Promise<boolean> {
      const index = this.tickets.findIndex(s => s.id === id);
      if(index === -1) return false;
      this.tickets.slice(index, 1)
      return true;
  }

  getById(id: UUIDTypes): ITicket {
      const ticket = this.tickets.find(t => t.id === id);
      if (!ticket) {
        throw new Error(`Service with id ${id} not found`);
      }
      return ticket;
    }
}