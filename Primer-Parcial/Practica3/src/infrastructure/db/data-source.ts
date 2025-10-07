import { DataSource } from "typeorm";
import { TicketEntity } from "../../domain/entities/ticket.entity";
import { TicketServiceEntity } from "../../domain/entities/ticket-service.entity";
import { ServiceEntity } from "../../domain/entities/service.entity";
import { EquipmentEntity } from "../../domain/entities/equipment.entity";
import { NotificationEntity } from "../../domain/entities/notification.entity";
import { PartEntity } from "../../domain/entities/part.entity";
import { ReviewEntity } from "../../domain/entities/review.entity";
import { TechnicianEntity } from "../../domain/entities/technician.entity";
import { TicketPartEntity } from "../../domain/entities/ticket-part.entity";
import { UserEntity } from "../../domain/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "1234",
  database: "testdb",
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [TicketEntity, TicketServiceEntity, ServiceEntity, EquipmentEntity, NotificationEntity, PartEntity, ReviewEntity, TechnicianEntity, TicketPartEntity, UserEntity],
});

