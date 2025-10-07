import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { TicketServiceEntity } from './ticket-service.entity';

@Entity()
export class TechnicianEntity {
  @PrimaryGeneratedColumn('uuid')
  technicianId!: string;

  @OneToOne(() => UserEntity, user => user.technicianProfile, { onDelete: 'CASCADE' })
  @JoinColumn()
  user!: UserEntity;

  // @OneToMany(() => TicketServiceEntity, ts => ts.technician)
  // ticketServices!: TicketServiceEntity[];

  @Column()
  specialty!: string;

  @Column({ type: 'int', default: 0})
  experienceYears!: number;

  @Column()
  state!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}