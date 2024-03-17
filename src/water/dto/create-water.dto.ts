import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { WaterlitresEnum } from "../shared/water.enums";

export class CreateWaterDto {
    @ApiProperty()
    @IsEnum({ enum: WaterlitresEnum })
    litres: WaterlitresEnum; //name - e,g 5 Litre

    @ApiProperty()
    price: number; //price of litres
}