import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth/auth.module';
import { AuthMiddlewareModule } from './authentication/middleware/auth.middleware.module';
import { GoogleAuthModule } from './authentication/oauth/google.auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    AuthMiddlewareModule,
    AuthModule,
    GoogleAuthModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
