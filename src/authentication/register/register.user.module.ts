import {Module} from '@nestjs/common';
import { RegisterUserController } from './register.user.controllers';
import { RegisterUserServices } from './register.user.services';
import {MongooseModule} from '@nestjs/mongoose';
import {RegisterUserSchema} from './register.user.DTO';

@Module({
    imports:[MongooseModule.forFeature([{name: 'RegisterUserModel', schema: RegisterUserSchema}])],
    controllers: [RegisterUserController],
    providers: [RegisterUserServices],
    exports: [RegisterUserServices]
})
export class RegisterUserModule{}