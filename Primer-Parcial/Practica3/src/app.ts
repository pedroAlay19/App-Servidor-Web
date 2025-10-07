import { EquipmentService } from "./application/services/EquipmentService";
import { EquipmentType } from "./domain/enums/equipment.enum";
import { AppDataSource } from "./infrastructure/db/data-source";
import { EquipmentRepository } from "./infrastructure/repositories/EquipmentRepository";

async function main() {
  try {
    await AppDataSource.initialize();
    const repo = new EquipmentRepository();
    const service = new EquipmentService(repo);

    console.log("=== CRUD DEMO (EquipmentService) ===");

    // 1️⃣ Crear un nuevo equipo
    const newEquipment = await service.createEquipment({
      name: "Laptop Lenovo ThinkPad",
      type: EquipmentType.LAPTOP,
      serialNumber: "SN-LENOVO-001",
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
    });

    if (!newEquipment || !newEquipment.id) {
      throw new Error("❌ No se pudo crear el equipo (ID indefinido).");
    }

    console.log("\n✅ Equipo creado correctamente:");
    console.log(newEquipment);

    // 2️⃣ Obtener todos los equipos
    const all = await service.getAllEquipments();
    console.log("\n📋 Equipos encontrados:");
    console.table(all);

    // 3️⃣ Obtener por ID
    const id = newEquipment.id;
    const equipment = await service.getEquipmentById(id);
    console.log("\n🔍 Equipo obtenido por ID:");
    console.log(equipment);

    // 4️⃣ Actualizar el equipo
    const updated = await service.updateEquipment(id, {
      name: "Equipo Actualizado",
      brand: "NuevaMarcaX",
    });
    console.log("\n✅ Equipo actualizado:");
    console.log(updated);

    // 5️⃣ Eliminar el equipo
    await service.deleteEquipment(id);
    console.log(`\n🗑️ Equipo con ID '${id}' eliminado correctamente.`);

    // 6️⃣ Verificar lista final
    const remaining = await service.getAllEquipments();
    console.log("\n📋 Equipos después de eliminar:");
    console.table(remaining);

    console.log("\n=== ✅ FIN DEL CRUD ===");
  } catch (error) {
    console.error("\n❌ Error en la ejecución:", error);
  }
}

main();
