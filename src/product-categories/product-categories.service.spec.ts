import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoriesService } from './product-categories.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { Product } from '../products/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/product-category.entity';
import { ProductCategoriesController } from './product-categories.controller';

const moduleMocker = new ModuleMocker(global);

describe('ProductCategoriesService', () => {
  let service: ProductCategoriesService;

  beforeEach( async() => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[TypeOrmModule.forFeature([ProductCategory])],
      controllers: [ProductCategoriesController],
      providers: [ProductCategoriesService],
    })
    .useMocker((token) => {
      const results = ['test1', 'test2'];
      if (token === ProductCategoriesService) {
        return { findAll: jest.fn().mockResolvedValue(results) };
      }
      if (typeof token === 'function') {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        return new Mock();
      }
    })
    .compile();

    service = module.get<ProductCategoriesService>(ProductCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
