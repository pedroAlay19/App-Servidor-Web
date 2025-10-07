import { AppDataSource } from "../db/data-source";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserEntity } from "../../domain/entities/user.entity";

export class UserRepository implements IUserRepository {
  private repo = AppDataSource.getRepository(UserEntity);

  async findById(id: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    return this.repo.save(entity);
  }

  async update(entity: UserEntity): Promise<UserEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
