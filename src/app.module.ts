import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth/auth.module';
import { AuthMiddlewareModule } from './authentication/middleware/auth.middleware.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://benedict:benedict@cluster0.gstdo9d.mongodb.net/farm'),
    AuthMiddlewareModule,
    AuthModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
