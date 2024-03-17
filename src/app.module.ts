import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { WaterModule } from './water/water.module';
import { SalesModule } from './sales/sales.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfig),
     AuthModule,
     UserModule,
     RoleModule,
     WaterModule,
     SalesModule,
     ],
 // controllers: [AppController],
 // providers: [AppService],
})
export class AppModule {}
