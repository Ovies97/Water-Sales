import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WaterlitresEnum } from "./shared/water.enums";
import { Sales } from "src/sales/sales.entity";

@Entity()
export class Water extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Litres: WaterlitresEnum;

  @Column({ type: 'decimal',  precision: 6, scale: 2})
  Price: number;

  @OneToMany(() => Sales, (sale) => sale.water)
  sales: Sales[];
}