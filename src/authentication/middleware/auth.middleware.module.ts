import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { JwtModule } from '../jwt/jwt.module';
import { AuthMiddleware } from './auth.middleware';





@Module({
    imports: [JwtModule]
})
export class AuthMiddlewareModule implements NestModule{
    configure(consumer:MiddlewareConsumer){
        consumer.apply(AuthMiddleware).forRoutes();
    }
}