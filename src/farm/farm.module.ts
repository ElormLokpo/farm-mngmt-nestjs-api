import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmController } from './farm.controller';
import { FarmSchema } from './farm.DTO';
import { FarmServices } from './farm.services';
import { AuthMiddleware } from 'src/authentication/middleware/auth.middleware';
import { AuthMiddlewareModule } from 'src/authentication/middleware/auth.middleware.module';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'FarmModel', schema: FarmSchema}]),
        AuthMiddlewareModule
    ],
    controllers: [FarmController],
    providers: [FarmServices]
})
export class FarmModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(AuthMiddleware).forRoutes('farm')
    }
}