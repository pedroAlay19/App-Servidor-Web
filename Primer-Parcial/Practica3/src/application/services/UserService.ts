import { UserEntity } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserRole } from "../../domain/enums/user-role.enum";

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  async getById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  async create(data: Partial<UserEntity>): Promise<UserEntity> {
    if (!data.name || !data.lastName || !data.email || !data.phone || !data.address) {
      throw new Error("Missing required user fields");
    }

    const user = new UserEntity();
    Object.assign(user, data);
    user.role = data.role ?? UserRole.CLIENT;

    return this.userRepository.create(user);
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    const existing = await this.getById(id);
    Object.assign(existing, data);
    return this.userRepository.update(existing);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.userRepository.delete(id);
  }
}
