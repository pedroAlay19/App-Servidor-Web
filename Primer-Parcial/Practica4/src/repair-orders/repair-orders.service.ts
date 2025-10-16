import { Injectable } from '@nestjs/common';
import { CreateRepairOrderDto } from './dto/create-repair-order.dto';
import { UpdateRepairOrderDto } from './dto/update-repair-order.dto';

@Injectable()
export class RepairOrdersService {
  create(createRepairOrderDto: CreateRepairOrderDto) {
    return 'This action adds a new repairOrder';
  }

  findAll() {
    return `This action returns all repairOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repairOrder`;
  }

  update(id: number, updateRepairOrderDto: UpdateRepairOrderDto) {
    return `This action updates a #${id} repairOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} repairOrder`;
  }
}
