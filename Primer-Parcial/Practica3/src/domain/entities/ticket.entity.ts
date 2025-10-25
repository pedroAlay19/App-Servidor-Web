import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { EquipmentEntity } from './equipment.entity';
import { TicketServiceEntity } from './ticket-service.entity';
import { TicketPartEntity } from './ticket-part.entity';
import { TicketStatus } from '../enums/ticket.enum';
import { NotificationEntity } from './notification.entity';
import { ReviewEntity } from './review.entity';

@Entity('Ticket')
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => EquipmentEntity, equipment => equipment.tickets)
  equipment!: EquipmentEntity;

  @Column({ type: 'text'})
  problemDescription!: string;

  @Column({ type: 'text', nullable: true })
  diagnosis?: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true})
  estimatedCost?: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true})
  finalCost?: number;

  @Column({ type: 'date', nullable: true})
  warrantyStartDate?: Date;

  @Column({ type: 'date', nullable: true})
  warrantyEndDate?: Date;

  @Column({ type: 'enum', enum: TicketStatus })
  status!: TicketStatus;

  @OneToMany(() => TicketServiceEntity, ts => ts.ticket)
  ticketServices!: TicketServiceEntity[];

  @OneToMany(() => TicketPartEntity, tp => tp.ticket, {nullable: true})
  ticketParts?: TicketPartEntity[];

  @OneToMany(() => NotificationEntity, notification => notification.ticket)
  notifications!: NotificationEntity[];

  @OneToMany(() => ReviewEntity, review => review.ticket, {nullable: true})
  reviews?: ReviewEntity[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
