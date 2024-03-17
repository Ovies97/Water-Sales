import { User } from "src/user/user.entity";
import { Water } from "src/water/water.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, user => user.sales)
    user: User;
  
    @Column()
    userId: number;
   
     @ManyToOne(() => Water, water => water.sales)
     water: Water; 

     @Column()
     waterId: number;
  
     @Column({ type: 'decimal', precision:10, scale: 2})
     amount: number;

    @Column()
    quantity: number;

}