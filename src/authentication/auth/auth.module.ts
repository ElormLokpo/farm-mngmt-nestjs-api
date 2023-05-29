import {Module} from '@nestjs/common';
import { AuthUserController } from './auth.user.controllers';
import { RegisterUserServices } from './register.user.services';
import {MongooseModule} from '@nestjs/mongoose';
import {RegisterUserSchema} from './register.user.DTO';
import { LoginUserService } from './login.user.services';
import { JwtModule } from '../jwt/jwt.module';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'UserModel', schema: RegisterUserSchema}]),
        JwtModule
],
    controllers: [AuthUserController],
    providers: [RegisterUserServices,LoginUserService],
})
export class AuthModule{}