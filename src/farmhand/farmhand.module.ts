import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/authentication/jwt/jwt.module';
import { AuthMiddleware } from 'src/authentication/middleware/auth.middleware';
import { AuthMiddlewareModule } from 'src/authentication/middleware/auth.middleware.module';
import { FarmHandController } from './farmhand.controller';
import { FarmHandSchema } from './farmhand.DTO';
import { FarmHandServices } from './farmhand.services';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmHandModel', schema: FarmHandSchema}]),
        JwtModule,
        AuthMiddlewareModule
    ],
    controllers: [FarmHandController],
    providers: [FarmHandServices]
})
export class FarmHandModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(AuthMiddleware).forRoutes('farmhand')
    }
}