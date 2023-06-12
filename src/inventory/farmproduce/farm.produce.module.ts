import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/authentication/jwt/jwt.module';
import { AuthMiddleware } from 'src/authentication/middleware/auth.middleware';
import { AuthMiddlewareModule } from 'src/authentication/middleware/auth.middleware.module';
import { FarmProduceController } from './farmproduce.controller';
import { FarmProduceSchema } from './farmproduce.DTO';
import { FarmProduceServices } from './farmproduce.services';


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmProduceModel', schema: FarmProduceSchema}]),
        JwtModule,
        AuthMiddlewareModule
    ],
    controllers: [FarmProduceController],
    providers: [FarmProduceServices]
})
export class FarmProduceModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
        .apply(AuthMiddleware)
        .exclude('farmproduce/find/all')
        .forRoutes('farmproduce')
     }
}