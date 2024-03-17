import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './sales.entity';
import { WaterModule } from 'src/water/water.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sales]), WaterModule],
  providers: [SalesService],
  controllers: [SalesController]
})
export class SalesModule {}
