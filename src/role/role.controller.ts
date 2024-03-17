
import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';


@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Role> {
    return this.roleService.findById(id);
  }

  @Post()
  async create(@Body() role: CreateRoleDto): Promise<Role> {
    return this.roleService.create(role);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() role: Role): Promise<Role> {
    return this.roleService.update(id, role);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.roleService.delete(id);
  }
}



