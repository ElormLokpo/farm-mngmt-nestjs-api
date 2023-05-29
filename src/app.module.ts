import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authentication/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://benedict:benedict@cluster0.gstdo9d.mongodb.net/farm'),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
