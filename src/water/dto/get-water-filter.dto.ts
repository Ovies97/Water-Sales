import { IsIn, IsOptional } from "class-validator";
import { WaterlitresEnum } from "../shared/water.enums";

export class GetWaterFilterDto{
    @IsOptional()
    @IsIn([WaterlitresEnum.Five, WaterlitresEnum.Four, WaterlitresEnum.Three, WaterlitresEnum.Two, WaterlitresEnum.One])
    Litres: WaterlitresEnum;
}