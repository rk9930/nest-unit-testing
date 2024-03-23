import { IsString, IsBoolean, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    name:string

    @IsBoolean()
    is_featured:boolean    

    @IsBoolean()
    is_active:boolean

    @IsNumber()
    product_category_id:number
}
