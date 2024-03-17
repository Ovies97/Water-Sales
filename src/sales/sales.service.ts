import { Inject, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { WaterService } from 'src/water/water.service';
import { SalesRecieptDto } from './dto/sales-reciept.dto';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { User } from 'src/user/user.entity';
import { Water } from 'src/water/water.entity';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales)
        private readonly salesRepository: Repository<Sales>, private readonly waterService: WaterService,
        @Inject(REQUEST) private readonly request: Request,
    ) { }

    async findAll(): Promise<Sales[]> {
        return await this.salesRepository.find({relations: ['water', 'user']});
    }

    async findById(id: number): Promise<Sales> {
        return await this.salesRepository.findOne({relations: ['water', 'user']});
    }


    async delete(id: number): Promise<void> {
        await this.salesRepository.delete(id);
    }

    async create(createsaleDto: CreateSaleDto, user: User): Promise<SalesRecieptDto> {

        const { quantity, waterId } = createsaleDto;
        const water = await this.waterService.findById(waterId);
        const totalAmount = quantity * water.Price;
        const sale = new Sales();
        sale.userId = user.id;

        sale.water = water;
        sale.amount = totalAmount;
        sale.quantity = quantity;
        await this.salesRepository.save(sale);
        const receipt: SalesRecieptDto = {
            description: `You have purchased ${quantity} X ${water.Litres} of water `,
            totalAmount: totalAmount,
            userId: user.id,
        }
        return receipt;
    }
}

