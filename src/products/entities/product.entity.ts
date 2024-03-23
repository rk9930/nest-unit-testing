import { ProductCategory } from "../../product-categories/entities/product-category.entity";
import { Entity , PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, JoinColumn} from "typeorm";

@Entity('products')

export class Product {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  is_featured: boolean;

  @Column({ default: true })
  is_active: boolean;

  @Column({type:"timestamp"})
  created_at: Date;

  @Column()
  product_category_id:number

  @ManyToOne(()=>ProductCategory, productCategory=>productCategory.product)
  @JoinColumn({name:"product_category_id" })
  productCategory : ProductCategory  
}
