import { Body, Controller, Get, Post } from '@nestjs/common';
import { productDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    findAllProduct(){
        this.productService.findAllProduct();
    }

    @Post()
    insertProduct(@Body() product: productDto){
       this.productService.insertProduct(product);
        
    }

}
