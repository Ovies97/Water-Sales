import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{
    
    id: string;
    @ApiProperty()
    name: string;
}