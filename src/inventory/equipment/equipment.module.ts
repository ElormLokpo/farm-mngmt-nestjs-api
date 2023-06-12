import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from 'src/authentication/jwt/jwt.module';
import { AuthMiddleware } from 'src/authentication/middleware/auth.middleware';
import { AuthMiddlewareModule } from 'src/authentication/middleware/auth.middleware.module';
import { EquipmentController } from './equipment.controller';
import { EquipmentSchema } from './equipment.DTO';
import { EquipmentServices } from './equipment.services';


@Module({
    imports:[
        MongooseModule.forFeature([{name: 'EquipmentModel', schema: EquipmentSchema}]),
        JwtModule,
        AuthMiddlewareModule
    ],
    controllers: [EquipmentController],
    providers: [EquipmentServices]
})
export class EquipmentModule implements NestModule {
    configure(consumer: MiddlewareConsumer){
        consumer.apply(AuthMiddleware).forRoutes('equipment')
    }
}