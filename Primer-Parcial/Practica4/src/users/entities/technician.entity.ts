import { Column, ChildEntity, OneToMany } from 'typeorm';
import { TicketService } from '../../repair-orders/entities/repair-order-detail.entity'
import { User } from './user.entity';
import { UserRole } from './enums/user-role.enum';

@ChildEntity(UserRole.TECHNICIAN)
export class Technician extends User {
  @OneToMany(() => TicketService, ts => ts.technician, {nullable: true})
  ticketServices?: TicketService[];

  @Column()
  specialty!: string;

  @Column({ type: 'int', default: 0})
  experienceYears!: number;

  @Column()
  active!: boolean;
}