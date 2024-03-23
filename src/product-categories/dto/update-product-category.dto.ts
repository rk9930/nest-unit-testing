import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCategoryDto } from './create-product-category.dto';
import { Optional } from '@nestjs/common';
import { IsString, IsBoolean } from "class-validator";

export class UpdateProductCategoryDto extends PartialType(CreateProductCategoryDto) {
    @Optional()
    @IsString()
    name:string

    @Optional()
    @IsBoolean()
    is_active:boolean
}
