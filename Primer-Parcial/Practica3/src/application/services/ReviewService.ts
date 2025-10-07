import { ReviewEntity } from "../../domain/entities/review.entity";
import { IReviewRepository } from "../../domain/repositories/IReviewRepository";

export class ReviewService {
  constructor(private readonly reviewRepository: IReviewRepository) {}

  async getAll(): Promise<ReviewEntity[]> {
    return this.reviewRepository.findAll();
  }

  async getById(id: string): Promise<ReviewEntity> {
    const review = await this.reviewRepository.findById(id);
    if (!review) throw new Error("Review not found");
    return review;
  }

  async create(data: Partial<ReviewEntity>): Promise<ReviewEntity> {
    if (!data.ticket || !data.rating) {
      throw new Error("Missing required review data");
    }

    const review = new ReviewEntity();
    Object.assign(review, data);
    return this.reviewRepository.create(review);
  }

  async update(id: string, data: Partial<ReviewEntity>): Promise<ReviewEntity> {
    const existing = await this.getById(id);
    Object.assign(existing, data);
    return this.reviewRepository.update(existing);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.reviewRepository.delete(id);
  }
}
