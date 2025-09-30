// Piezas de repuesto para reparaciones
export interface IPart {
  id: number;
  name: string;
  description?: string;
  stock: number;
  unitPrice: number;
}