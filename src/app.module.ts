import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth/auth.module';
import { AuthMiddlewareModule } from './authentication/middleware/auth.middleware.module';
import { GoogleAuthModule } from './authentication/oauth/google.auth.module';
import {ConfigModule} from '@nestjs/config';
import { FarmModule } from './farm/farm.module';
import { FarmHandModule } from './farmhand/farmhand.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthMiddlewareModule,
    AuthModule,
    GoogleAuthModule,
    FarmModule,
    FarmHandModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
