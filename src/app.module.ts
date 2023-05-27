import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
