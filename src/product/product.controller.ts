import { Body, Controller, Get, Post, UploadedFile, UseInterceptors , ParseFi } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { productDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { diskStorage } from 'multer';
import { extname } from 'path'

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    findAllProduct(){
        return this.productService.findAllProduct();
    }

    @Post()
    insertProduct(@Body() product: productDto){
       this.productService.insertProduct(product);
        
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file' ,  {
        storage: diskStorage({
            destination: './uploads'
            , filename: (req, file, cb) => {
              // Generating a 32 random chars long string
              const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
              //Calling the callback passing the random name generated with the original extension name
              cb(null, `${randomName}${extname(file.originalname)}`)
            }
          })
        
    }) )
    uploadThumbnail(@UploadedFile(new ParseFilePipe({
    
      }),) file: Express.Multer.File) {
        return 'upload successfully uploaded';
       }
    }


