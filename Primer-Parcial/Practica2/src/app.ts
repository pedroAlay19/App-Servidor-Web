import { EquipmentRepositoryInMemory } from "./infrastructure/EquipmentRepositoryInMemory";
import { ServiceRepositoryInMemory } from "./infrastructure/ServiceRepositoryInMemory";
import { TicketRepositoryInMemory } from "./infrastructure/TicketRepositoryInMemory";

import { EquipmentService } from "./application/EquipmentService";
import { ServiceService } from "./application/ServiceService";
import { TicketService } from "./application/TicketService";

import { IEquipment } from "./domain/entities/Equipment";
import { IService } from "./domain/entities/Service";

(async () => {
  // 1️⃣ Inicializar repositorios
  const equipmentRepo = new EquipmentRepositoryInMemory();
  const serviceRepo = new ServiceRepositoryInMemory();
  const ticketRepo = new TicketRepositoryInMemory();

  // 2️⃣ Inicializar servicios
  const equipmentService = new EquipmentService(equipmentRepo);
  const serviceService = new ServiceService(serviceRepo);
  const ticketService = new TicketService(
    ticketRepo,
    equipmentRepo,
    serviceRepo
  );

  try {
    // 3️⃣ Crear Equipment
    const equipmentData: Omit<IEquipment, "id" | "createdAt"> = {
      type: "LAPTOP",
      brand: "Dell",
      model: "XPS 13",
      currentStatus: "RECEIVED",
    };
    const eq = await equipmentService.createEquipment(equipmentData);
    console.log("Equipo creado:", eq);

    // 4️⃣ Crear Service
    const serviceData: Omit<IService, "id"> = {
      name: "Reparación de pantalla",
      basePrice: 150,
      active: true,
      notes: "Incluye limpieza interna",
    };

    const sv = await serviceService.createService(serviceData);
    console.log("Servicio creado: ", sv);

    // 5️⃣ Crear Ticket
    ticketService.createTicket({
      equipment: eq,
      service: sv,
      problemDescription: "La pantalla no enciende",
      id: "", // el service reemplaza con uuid
      status: "OPEN",
    });

    // Esperar un momento para que el callback de createTicket termine
    setTimeout(async () => {
      // 6️⃣ Listar Tickets
      const tickets = await ticketService.getTickets();
      console.log("Tickets existentes:", tickets);
    }, 1200);
  } catch (err: any) {
    console.error("Error:", err.message);
  }
})();
