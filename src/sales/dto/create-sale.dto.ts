import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleDto
{
  
        @ApiProperty()
        quantity: number;
    
        @ApiProperty()
        waterId: number;
    
}