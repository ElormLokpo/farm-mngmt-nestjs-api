import {Module} from '@nestjs/common';
import { AuthUserController } from './auth.user.controllers';
import { RegisterUserServices } from './register.user.services';
import {MongooseModule} from '@nestjs/mongoose';
import {RegisterUserSchema} from './register.user.DTO';
import { LoginUserService } from './login.user.services';

@Module({
    imports:[MongooseModule.forFeature([{name: 'UserModel', schema: RegisterUserSchema}])],
    controllers: [AuthUserController],
    providers: [RegisterUserServices,LoginUserService],
})
export class AuthModule{}