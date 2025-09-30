import type { IEquipment } from "./Equipment";

// Interfaz que define la estructura de un usuario
export interface IUser {
    id: number;
    name: string;
    lastName: string;
    email: string;  
    phone: string;
    address: string;
    role: "CLIENT" | "TECHNICIAN" | "ADMIN";
    createdAt: Date;
}

// Interfaz que define la estructura de un cliente  
export interface IClient extends IUser {
    equipments?: IEquipment[]; // Equipos asociados al cliente
}

export interface ITechnician extends IUser {
    specialty: string; // Especialidad del técnico
    experienceYears: number; // Años de experiencia del técnico
    state: boolean; // Estado del técnico
}