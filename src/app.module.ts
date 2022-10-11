import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-34-200-205-45.compute-1.amazonaws.com',
    port: 5432,
    username: 'zxlspxluvruyue',
    password: '8ea7846f1a1a21d9532170d0aa829811ea222b1b48ce653226a9c8a1a0bbca4e',
    database: 'dc1a9pb6q4h97k',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
  },
    logging:true,
  }), CategoryModule, ProductModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
