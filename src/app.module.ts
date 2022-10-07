import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '012522123',
    database: 'postgres',
    entities: [Category, Product],
    synchronize: true,
    logging:true,
  }), CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
