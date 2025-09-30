# Sistema de Gestión para Taller de Servicio Tecnico

## Descripción del Negocio
El sistema es una **plataforma web para talleres de reparación de dispositivos electrónicos**, enfocada en ofrecer **transparencia, organización y una mejor experiencia de cliente**.  

La idea principal es que los clientes puedan:
- Conocer los **servicios ofrecidos** por el taller (ejemplo: reparación de celulares, PCs, laptops, consolas, etc).
- **Registrar sus equipos** al ingresar al taller.
- **Hacer seguimiento en tiempo real** al estado de reparación de su dispositivo.
- **Recibir notificaciones** sobre el progreso.
- **Dejar reseñas** sobre el servicio recibido.

Por otro lado, el taller obtiene una herramienta para:
- Gestionar clientes, técnicos y equipos.
- Controlar tickets de reparación.
- Administrar repuestos y servicios ofrecidos.
- Mantener comunicación clara con los clientes.

---

## Flujo del Negocio

1. **Información del Taller (Módulo Público)**
   - Se muestra la información del negocio (`IRepairShop`).
   - Catálogo de **servicios disponibles** (`IService`).
   - Acceso a **reseñas de clientes** (`IReview`) para generar confianza.

2. **Registro e Inicio de Sesión**
   - Un cliente puede registrarse (`IUser`, `IClient`) o iniciar sesión.
   - Cada cliente puede asociar sus dispositivos (`IEquipment`).

3. **Ingreso del Equipo y Creación de Ticket**
   - Cuando el cliente deja un dispositivo, se crea un **ticket** (`ITicket`).
   - El ticket incluye:
     - Equipo a reparar.
     - Servicio solicitado.
     - Problema descrito.
     - Estado inicial del ticket (`OPEN`).

4. **Proceso de Reparación**
   - Un técnico (`ITechnician`) es asignado al ticket.
   - El estado del ticket se va actualizando (`IN_REVIEW`, `IN_REPAIR`, `WAITING_PARTS`, `READY`, `DELIVERED`).
   - Si se usan repuestos, se registran en `ITicketPart` asociados a `IPart`.

5. **Notificaciones al Cliente**
   - El cliente recibe **notificaciones automáticas** (`INotification`) cada vez que cambia el estado de su ticket.
   - Puede acceder a su cuenta y ver los detalles: costos estimados/finales, diagnóstico y tiempo de entrega.

6. **Entrega y Reseña**
   - Una vez que el ticket está en estado `DELIVERED`, el cliente recibe su equipo.
   - El cliente puede dejar una **reseña** (`IReview`) con su calificación y comentarios.

---

## Propuesta de Valor

- **Para los clientes:**
  - Transparencia en el proceso de reparación.
  - Seguimiento en tiempo real de sus dispositivos.
  - Comunicación clara mediante notificaciones.
  - Confianza a través de reseñas y opiniones de otros clientes.

- **Para el taller:**
  - Organización interna de equipos, tickets, técnicos y repuestos.
  - Control del inventario de piezas (`IPart`).
  - Administración clara de los servicios ofrecidos.
  - Mejora de la reputación gracias a la retroalimentación de clientes.

---

## División en Módulos (Trabajo en Equipo)

El sistema se divide en **3 módulos principales**, cada uno gestionado por un integrante del equipo:

1. **Gestión de Usuarios y Clientes**  
   - Interfaces: `IUser`, `IClient`, `ITechnician`  
   - Funcionalidades:
     - Registro y login de usuarios.
     - Gestión de roles (cliente, técnico, administrador).
     - Asociación de clientes con equipos.

2. **Gestión de Equipos, Tickets y Servicios**  
   - Interfaces: `IEquipment`, `ITicket`, `IService`, `ITicketPart`  
   - Funcionalidades:
     - Registro de equipos.
     - Creación y seguimiento de tickets.
     - Asignación de técnicos a tickets.
     - Control de servicios ofrecidos y repuestos usados en reparaciones.

3. **Gestión de Repuestos, Notificaciones y Reseñas**  
   - Interfaces: `IPart`, `INotification`, `IReview`, `IRepairShop`  
   - Funcionalidades:
     - Administración del inventario de piezas.
     - Envío de notificaciones al cliente.
     - Reseñas y calificaciones de clientes.
     - Información general del taller.

---

## Ejemplo de Flujo en el Sistema

1. Cliente entra a la página y ve los servicios.  
2. Se registra e ingresa su dispositivo en el taller.  
3. El administrador crea un ticket y asigna un técnico.  
4. El técnico actualiza el estado conforme avanza la reparación.  
5. El cliente recibe notificaciones automáticas en su cuenta/correo.  
6. El cliente recibe su equipo y deja una reseña sobre el servicio.  

---

## ✅ Conclusión
Este sistema ofrece una **solución integral para talleres de reparación**, mejorando la experiencia del cliente y optimizando la gestión interna del negocio.  
Gracias a la modularización, puede ser desarrollado de manera colaborativa y escalable.

