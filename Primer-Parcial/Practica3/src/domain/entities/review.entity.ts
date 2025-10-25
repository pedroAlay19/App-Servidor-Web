import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { TicketEntity } from './ticket.entity';

@Entity('Review')
export class ReviewEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => TicketEntity, ticket => ticket.reviews)
  ticket!: TicketEntity;

  @Column({ type: 'smallint' })
  rating!: number; // 1–5

  @Column({ type: 'text', nullable: true })
  comment?: string;

  @CreateDateColumn()
  createdAt!: Date;
} 
