import { Controller, Get, Post, Body, Param, Put, Delete, Patch, UseGuards, NotFoundException, Req } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sales } from './sales.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateSaleDto } from './dto/create-sale.dto';
import { SalesRecieptDto } from './dto/sales-reciept.dto';
import { User } from 'src/user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('sales')
@ApiBearerAuth()
@Controller('sales')
@UseGuards(AuthGuard('jwt'))
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Get()
  async findAll(): Promise<Sales[]> {
    const sales = await this.salesService.findAll
    return this.salesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Sales> {
    console.log('id',id)
    return this.salesService.findById(id);
  }

  @Post()
  async create(@Body() createsaleDto: CreateSaleDto, @Req() req: any): Promise<SalesRecieptDto> {
    const user: User = req.user;
    console.log(req)
    return this.salesService.create(createsaleDto, user)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.salesService.delete(id);
  }

}