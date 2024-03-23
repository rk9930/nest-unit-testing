import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
// import { ProductCategory } from './entities/product-category.entity';
import { ProductCategory } from '../product-categories/entities/product-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoriesService {
  constructor(@InjectRepository(ProductCategory) private productCategoryRepository:Repository<ProductCategory>){}
  async create(createProductCategoryDto: CreateProductCategoryDto) {
    const newCategory = await this.productCategoryRepository.save(createProductCategoryDto);
    return {message:"Product category has been created successfully", data:newCategory}
  }

  async findAll() {
    // console.log("reached here ");
      const product_category_list = await this.productCategoryRepository.find({
        relations:['product']
      });
      return product_category_list;
  }

  async findOne(id: number) { 
    const product = await this.productCategoryRepository.findOneBy({id:id});

    return product
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    const product = await this.productCategoryRepository.findOneBy({id:id});
    this.productCategoryRepository.merge(product, updateProductCategoryDto);
    const result = await this.productCategoryRepository.save(product);
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
