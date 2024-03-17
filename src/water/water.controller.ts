// water.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { WaterService } from './water.service';
import { Water } from './water.entity';
import { ApiTags } from '@nestjs/swagger';
import { GetWaterDto } from './dto/get-water.dto';
import { CreateWaterDto } from './dto/create-water.dto';

@ApiTags('water')
@Controller('water')
export class WaterController {
  constructor(private readonly waterService: WaterService) {}

  @Get()
  async findAll(): Promise<Water[]> {
    return this.waterService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Water> {
    return this.waterService.findById(id);
  }

  @Post()
  async create(@Body() water: CreateWaterDto): Promise<Water> {
    return this.waterService.create(water);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() water: Water): Promise<Water> {
    return this.waterService.update(id, water);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.waterService.delete(id);
  }
}
