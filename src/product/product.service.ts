
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){
    }
    findAllProduct(): void{
        this.productRepository.find();
    }
    insertProduct(data):void{
            this.productRepository.insert(data)
    }
}
