import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsBoolean } from 'class-validator';
import { Optional } from '@nestjs/common';


export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsString()
    name:string

    @Optional()
    @IsBoolean()
    is_featured?:boolean    

    @Optional()
    @IsBoolean()
    is_active?:boolean
}
