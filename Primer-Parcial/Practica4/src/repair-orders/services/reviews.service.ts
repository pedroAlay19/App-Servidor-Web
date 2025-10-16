import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from '../entities/repair-order-review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from '../dto/create-review.dto';
import {TicketsService} from './tickets.service'
import { UpdateReviewDto } from '../dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,

    private readonly ticketService: TicketsService,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const ticketFound = await this.ticketService.findOne(
      createReviewDto.ticketId,
    );
    const review = this.reviewRepository.create({
      ...createReviewDto,
      ticket: ticketFound,
    });
    return await this.reviewRepository.save(review);
  }

  async findByTicket(ticketId: string) {
    return await this.reviewRepository.find({where: { ticket: { id: ticketId }}});
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewRepository.findOneBy({ id });
    if (!review) throw new NotFoundException(`Review with ${id} not found`);
    await this.reviewRepository.update(id, updateReviewDto);
    return await this.reviewRepository.findOneBy({ id });
  }

  async remove(id: string) {
    if (!(await this.reviewRepository.findOneBy({ id })))
      throw new NotFoundException(`Review with ${id} not found`);
    await this.reviewRepository.delete(id);
  }
}
