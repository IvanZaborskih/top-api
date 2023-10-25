import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TopPageModule } from './top-page/top-page.module';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product/product.controller';
import { ReviewController } from './review/review.controller';
import { TopPageController } from './top-page/top-page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { getMongoConfig } from './configs/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ReviewModule,
    TopPageModule,
    ProductModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    UsersModule,
  ],
  controllers: [
    AuthController,
    ProductController,
    ReviewController,
    TopPageController,
  ],
  providers: [],
})
export class AppModule {}
