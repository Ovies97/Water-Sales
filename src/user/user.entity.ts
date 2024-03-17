import { Role } from "src/role/role.entity";
import { Sales } from 'src/sales/sales.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity{
  litre: string;
  price: string;

  
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleId: number;
  
    @Column()
    username: string;
  
    @Column()
    password: string;

    @Column()
    salt: string;
  

    async validatePassword(password: string): Promise<boolean>
    {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }

    @ManyToOne(() => Role, (role: Role) => role.users)
    role: Role;
  
    @OneToMany(() => Sales, (sales: Sales) => sales.user)
    sales: Sales;

    
}