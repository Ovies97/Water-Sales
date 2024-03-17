import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findById(id: number): Promise<Role> {
    return await this.roleRepository.findOne({ where: {id,}});
  }

  async create(role: CreateRoleDto): Promise<Role> {
    const newRole: Role = Object.assign(new Role(),role);
    return await this.roleRepository.save(newRole);
  }

  async update(id: number, role: Role): Promise<Role> {
    await this.roleRepository.update(id, role);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
