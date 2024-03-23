import { Product } from "../../products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('product_categories')
export class ProductCategory {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    is_active:boolean;

    @OneToMany(()=>Product, product=>product.productCategory)
    product:Product[]
}
