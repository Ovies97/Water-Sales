import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Water } from './water.entity';
import { CreateWaterDto } from './dto/create-water.dto';

@Injectable()
export class WaterService {
  constructor(
    @InjectRepository(Water)
    private readonly waterRepository: Repository<Water>,
  ) { }

  async findAll(): Promise<Water[]> {
    return await this.waterRepository.find();
  }

  async findById(id: number): Promise<Water> {
    return await this.waterRepository.findOne({ where: { id } });
  }

  async create(createWaterDto: CreateWaterDto): Promise<Water> {
    const { litres, price } = createWaterDto;
    const water = new Water();
    water.Litres = litres;
    water.Price = price;
    return await this.waterRepository.save(water);
  }

  async update(id: number, water: Water): Promise<Water> {
    await this.waterRepository.update(id, water);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.waterRepository.delete(id);
  }


}