import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ReviewModule } from './modules/review/review.module';
import { TopPageModule } from './modules/top-page/top-page.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [AuthModule, ReviewModule, TopPageModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
