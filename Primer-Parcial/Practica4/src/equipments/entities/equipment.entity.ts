import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EquipmentStatus, EquipmentType } from "./enums/equipment.enum";
import { User } from "../../users/entities/user.entity";
import { RepairOrder } from "src/repair-orders/entities/repair-order.entity";

@Entity('equipment')
export class Equipment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, user => user.equipments, {onDelete: 'CASCADE'})
  user!: User;
  
  @Column()
  name!: string;

  @Column({ type: 'enum', enum: EquipmentType})
  type!: EquipmentType;

  @Column()
  brand!: string;

  @Column()
  model!: string;

  @Column({nullable: true})
  serialNumber?: string;

  @Column({nullable: true})
  observations?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({type: 'enum', enum: EquipmentStatus, default: EquipmentStatus.RECEIVED})
  currentStatus!: EquipmentStatus;

  @OneToMany(() => RepairOrder, rp => rp.equipment)
  repairOrders!: RepairOrder[];
}

