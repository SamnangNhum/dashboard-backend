import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    MulterModule.register({
      dest: './upload',            
      
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
