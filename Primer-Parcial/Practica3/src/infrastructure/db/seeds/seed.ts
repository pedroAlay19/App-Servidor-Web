import { AppDataSource } from "../data-source";
import { UserEntity } from "../../../domain/entities/user.entity";
import { TechnicianEntity } from "../../../domain/entities/technician.entity";
import { EquipmentEntity } from "../../../domain/entities/equipment.entity";
import { ServiceEntity } from "../../../domain/entities/service.entity";
import { PartEntity } from "../../../domain/entities/part.entity";
import { TicketEntity } from "../../../domain/entities/ticket.entity";
import { TicketPartEntity } from "../../../domain/entities/ticket-part.entity";
import { TicketServiceEntity } from "../../../domain/entities/ticket-service.entity";
import { ReviewEntity } from "../../../domain/entities/review.entity";

import { UserRole } from "../../../domain/enums/user-role.enum";
import { EquipmentType, EquipmentStatus } from "../../../domain/enums/equipment.enum";
import { TicketStatus, TicketServiceStatus } from "../../../domain/enums/ticket.enum";

export async function seed() {

  const ds = await AppDataSource.initialize();

  console.log("Iniciando carga de datos...");
  // --- USERS ---
  const userRepo = ds.getRepository(UserEntity);

  const client1 = userRepo.create({
    name: "Carlos",
    lastName: "Pérez",
    email: "carlos@example.com",
    phone: "555123456",
    address: "Av. Siempre Viva 123",
    role: UserRole.CLIENT,
  });

  const client2 = userRepo.create({
    name: "Lucía",
    lastName: "Fernández",
    email: "lucia@example.com",
    phone: "555987654",
    address: "Calle Falsa 456",
    role: UserRole.CLIENT,
  });

  const technicianUser = userRepo.create({
    name: "Andrés",
    lastName: "Lopez",
    email: "andres.tech@example.com",
    phone: "555765432",
    address: "Calle Sol 222",
    role: UserRole.TECHNICIAN,
  });

  await userRepo.save([client1, client2, technicianUser]);

  // --- TECHNICIANS ---
//   const techRepo = ds.getRepository(TechnicianEntity);

//   const technician = techRepo.create({
//     technicianId: technicianUser.id,
//     user: technicianUser,
//     specialty: "Electrónica y reparación de laptops",
//     experienceYears: 5,
//     state: "Activo",
//   });

//   await techRepo.save(technician);

  // --- EQUIPMENTS ---
  const equipmentRepo = ds.getRepository(EquipmentEntity);

  const laptop = equipmentRepo.create({
    user: client1,
    name: "Laptop Dell Inspiron",
    type: EquipmentType.LAPTOP,
    brand: "Dell",
    model: "Inspiron 15",
    serialNumber: "SN123456",
    observations: "No enciende correctamente",
    currentStatus: EquipmentStatus.IN_REPAIR,
  });

  const printer = equipmentRepo.create({
    user: client2,
    name: "Impresora HP LaserJet",
    type: EquipmentType.PRINTER,
    brand: "HP",
    model: "LaserJet 1020",
    serialNumber: "HP-PRT-987",
    currentStatus: EquipmentStatus.IN_REPAIR,
  });

  await equipmentRepo.save([laptop, printer]);

  // --- SERVICES ---
  const serviceRepo = ds.getRepository(ServiceEntity);

  const diagnosis = serviceRepo.create({
    serviceName: "Diagnóstico General",
    description: "Revisión completa para identificar fallas en el equipo.",
    basePrice: 20.0,
    category: "Diagnóstico",
    estimatedTimeMinutes: 30,
    active: true,
  });

  const repair = serviceRepo.create({
    serviceName: "Reparación de Placa Madre",
    description: "Cambio o reparación de componentes de la placa base.",
    basePrice: 150.0,
    category: "Reparación",
    estimatedTimeMinutes: 120,
    requiresParts: true,
  });

  await serviceRepo.save([diagnosis, repair]);

  // --- PARTS ---
  const partRepo = ds.getRepository(PartEntity);

  const motherboard = partRepo.create({
    name: "Placa Madre Dell",
    description: "Repuesto original Dell",
    stock: 5,
    unitPrice: 120.0,
  });

  const toner = partRepo.create({
    name: "Tóner HP LaserJet 1020",
    description: "Cartucho de tóner negro compatible HP",
    stock: 10,
    unitPrice: 45.0,
  });

  await partRepo.save([motherboard, toner]);

  // --- TICKETS ---
  const ticketRepo = ds.getRepository(TicketEntity);

  const ticket1 = ticketRepo.create({
    equipment: laptop,
    problemDescription: "El equipo no enciende ni carga batería.",
    status: TicketStatus.IN_PROGRESS,
  });

  const ticket2 = ticketRepo.create({
    equipment: printer,
    problemDescription: "La impresora no imprime correctamente, deja rayas.",
    status: TicketStatus.IN_PROGRESS,
  });

  await ticketRepo.save([ticket1, ticket2]);

  // --- TICKET SERVICES ---
  const ticketServiceRepo = ds.getRepository(TicketServiceEntity);

  const ts1 = ticketServiceRepo.create({
    ticket: ticket1,
    service: diagnosis,
    unitPrice: 20,
    discount: 0,
    subTotal: 20,
    status: TicketServiceStatus.PENDING,
  });

  const ts2 = ticketServiceRepo.create({
    ticket: ticket1,
    service: repair,
    unitPrice: 150,
    discount: 10,
    subTotal: 140,
    status: TicketServiceStatus.IN_PROGRESS,
  });

  await ticketServiceRepo.save([ts1, ts2]);

  // --- TICKET PARTS ---
  const ticketPartRepo = ds.getRepository(TicketPartEntity);

  const tp1 = ticketPartRepo.create({
    ticket: ticket1,
    part: motherboard,
    quantity: 1,
    subTotal: 120,
  });

  const tp2 = ticketPartRepo.create({
    ticket: ticket2,
    part: toner,
    quantity: 1,
    subTotal: 45,
  });

  await ticketPartRepo.save([tp1, tp2]);

  // --- REVIEWS ---
  const reviewRepo = ds.getRepository(ReviewEntity);

  const review1 = reviewRepo.create({
    ticket: ticket1,
    rating: 5,
    comment: "Excelente servicio, mi laptop quedó perfecta.",
  });

  const review2 = reviewRepo.create({
    ticket: ticket2,
    rating: 4,
    comment: "Buen trabajo, aunque tardó un poco más de lo esperado.",
  });

  await reviewRepo.save([review1, review2]);

  console.log("Semilla completada exitosamente");
  await ds.destroy();
}
