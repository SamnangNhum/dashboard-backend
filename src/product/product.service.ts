
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){
    }
    findAllProduct(): Promise<Product[]> {
        return this.productRepository.find();
    }
    insertProduct(data) {
          return  this.productRepository.insert(data)
    }
}
