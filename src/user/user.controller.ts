// user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, Patch, Logger, Query, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetRoleFilterDto } from 'src/role/dto/GetRoleFilter.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Users')
// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  private logger = new Logger('UserController');
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query(ValidationPipe)filterDto: GetRoleFilterDto, @Req() req: any): Promise<User[]> {
    const user: User = req.user;
    return this.userService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() createuserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createuserDto)
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}

