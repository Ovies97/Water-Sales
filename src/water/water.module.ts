// water.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterController } from './water.controller';
import { WaterService } from './water.service';
import { Water } from './water.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Water])],
  controllers: [WaterController],
  providers: [WaterService],
  exports: [WaterService]
  
})
export class WaterModule {}
