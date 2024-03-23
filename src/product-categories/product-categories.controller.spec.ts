import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoriesController } from './product-categories.controller';
import { ProductCategoriesService } from './product-categories.service';

describe('ProductCategoriesController', () => {
  let controller: ProductCategoriesController;
  let productCategoryService : ProductCategoriesService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCategoriesController],
      providers: [ProductCategoriesService,
        {
          provide:ProductCategoriesService,
          useValue:{
            create:jest.fn(),
            findAll:jest.fn().mockResolvedValue([
              {
                id:1,
                name:"product category test 1",
                is_active:1
              },
              {
                id:2,
                name:"product category test 2",
                is_active:1
              },
              {
                id:3,
                name:"product category test 3",
                is_active:1
              },
            ]),
            findOne:jest.fn(),
            remove:jest.fn(),
          }
        }
      ],
    }).compile();

    controller = module.get<ProductCategoriesController>(ProductCategoriesController);
  
    productCategoryService = module.get<ProductCategoriesService>(ProductCategoriesService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("should find all the product categories", async()=>{
    let res = await controller.findAll()
    console.log("find all values", res)
    expect(productCategoryService.findAll).toHaveBeenCalled();
  })
});
