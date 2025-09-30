import { v4 as uuid4, UUIDTypes } from "uuid";

// Servicios ofrecidos por el taller
export interface IService {
  id: UUIDTypes;
  name: string; // Nombre del servicio
  description?: string; // Descripción opcional
  basePrice: number; // Precio base sin repuestos
  estimatedTimeMinutes?: number; // Tiempo estimado de duración
  requiresParts?: boolean; // Indica si normalmente requiere repuestos
  category?: string; 
  imageUrl?: string[]; // Imagen opcional del servicio
  active: boolean; // Si el servicio está activo para ser ofrecido
  notes: string;
}
