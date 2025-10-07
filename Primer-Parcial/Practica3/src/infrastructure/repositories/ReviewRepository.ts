import { AppDataSource } from "../db/data-source";
import { IReviewRepository } from "../../domain/repositories/IReviewRepository";
import { ReviewEntity } from "../../domain/entities/review.entity";

export class ReviewRepository implements IReviewRepository {
  private repo = AppDataSource.getRepository(ReviewEntity);

  async findById(id: string): Promise<ReviewEntity | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<ReviewEntity[]> {
    return this.repo.find();
  }

  async create(entity: ReviewEntity): Promise<ReviewEntity> {
    return this.repo.save(entity);
  }

  async update(entity: ReviewEntity): Promise<ReviewEntity> {
    return this.repo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
