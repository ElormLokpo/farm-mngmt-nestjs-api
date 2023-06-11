import {Module} from '@nestjs/common';
import { JwtModule } from '../jwt/jwt.module';
import { AuthMiddleware } from './auth.middleware';

@Module({
    imports: [JwtModule],
    providers:[AuthMiddleware],
    exports: [AuthMiddleware]
})
export class AuthMiddlewareModule{}