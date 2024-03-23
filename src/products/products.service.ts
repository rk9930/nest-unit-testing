import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private productRepository:Repository<Product>
  )
  {}

  async create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
    const createdProduct = await this.productRepository.save(createProductDto);
    return {
      message:"Product added successfully.",
      createdProduct
    }
  }

  async findAll() {
    const data = await this.productRepository.find();
    return {data:data}
  }

  findOne(id: number) {
    console.log(id);
    const product = this.productRepository.findOneBy({
      id:id
    })
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({id:id});
    this.productRepository.merge(product,updateProductDto);
    const result = await this.productRepository.save(product);
    return {message:"Product has been updated successfully.",data:result};
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({id:id});
    product.is_active = false;
    const result = await this.productRepository.save(product);
    return {
      message:"Product has been removed successfully."
    };
  }
}
