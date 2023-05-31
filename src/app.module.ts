import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth/auth.module';
import { AuthMiddlewareModule } from './authentication/middleware/auth.middleware.module';
import { GoogleAuthModule } from './authentication/oauth/google.auth.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthMiddlewareModule,
    AuthModule,
    GoogleAuthModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
