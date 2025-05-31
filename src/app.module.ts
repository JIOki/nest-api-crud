import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
