import { Body, Controller, Get, Post } from '@nestjs/common';

import { CategoryService } from './category.service';
import { categoryDto } from '../dto/product_category.dto'

@Controller('product/category')
export class CategoryController {
    constructor(private categoryService: CategoryService ){}
    @Get()
    async get() {
        return this.categoryService.findAll()
    }

    @Post()
    createCustomer(@Body() createCategory: categoryDto ){
        this.categoryService.insert(createCategory)
        console.log(createCategory);
    }
}
