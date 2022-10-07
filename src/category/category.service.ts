import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {

    

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>

    ){
        console.log(this.findAll())
    }

    findAll(): Promise<Category[]> {
        
        return this.categoryRepository.find();

      }

    insert(data) {
        return  this.categoryRepository.insert(data)
    }

}
