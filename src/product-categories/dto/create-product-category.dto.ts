import { IsString, IsBoolean } from "class-validator";
export class CreateProductCategoryDto {
    @IsString()
    name:string

    @IsBoolean()
    is_active:boolean
}
