import { UUIDTypes } from "uuid";

export interface IRepository<T> {
  getAll(): Promise<T[]>;
  create(item: T, callback: (err: Error | null, result?: T) => void): void;
  update(id: UUIDTypes, item: Partial<T>): Promise<T | null>;
  delete(id: UUIDTypes): Promise<boolean>;
  getById(id: UUIDTypes): T;
}