import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { ProductCategory } from './product-categories/entities/product-category.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    database:"test",
    port:3306,
    username:'root',
    password:'',
    entities:[Product, ProductCategory],
    synchronize:true,
  }), ProductsModule, ProductCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
