import { ApiProperty } from "@nestjs/swagger";

export class GetWaterDto{
    
    @ApiProperty()
    Litres: number;

   // @ApiProperty()
    Price: number;
    
}