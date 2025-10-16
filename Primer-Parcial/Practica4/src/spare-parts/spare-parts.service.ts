import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SparePart } from './entities/spare-part.entity';
import { CreateSparePartDto } from './dto/create-spare-part.dto';
import { UpdateSparePartDto } from './dto/update-spare-part.dto';

@Injectable()
export class SparePartsService {
  constructor(
    @InjectRepository(SparePart)
    private readonly sparePartRepository: Repository<SparePart>,
  ) {}

  async create(createSparePartDto: CreateSparePartDto) {
    const sparePart = this.sparePartRepository.create(createSparePartDto);
    return await this.sparePartRepository.save(sparePart);
  }

  async findAll() {
    return await this.sparePartRepository.find({
      relations: ['repairOrderParts'],
    });
  }

  async findOne(id: string) {
    const sparePart = await this.sparePartRepository.findOne({
      where: { id },
      relations: ['repairOrderParts'], 
    });

    if (!sparePart) {
      throw new NotFoundException(`Spare part with id ${id} not found`);
    }

    return sparePart;
  }

  async update(id: string, updateSparePartDto: UpdateSparePartDto) {
    const sparePart = await this.sparePartRepository.preload({
      id,
      ...updateSparePartDto,
    });

    if (!sparePart) {
      throw new NotFoundException(`Spare part with id ${id} not found`);
    }

    return await this.sparePartRepository.save(sparePart);
  }

  async remove(id: string) {
    const sparePart = await this.sparePartRepository.findOneBy({ id });
    if (!sparePart) {
      throw new NotFoundException(`Spare part with id ${id} not found`);
    }

    await this.sparePartRepository.remove(sparePart);
  }
}
