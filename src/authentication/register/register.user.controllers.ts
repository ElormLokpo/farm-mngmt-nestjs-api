import {Controller, Post, Body} from '@nestjs/common';
import { RegisterUserServices } from './register.user.services';


@Controller('auth')
export class RegisterUserController{
    constructor(
        private readonly regiseterUserService: RegisterUserServices
    ){}

    @Post('register')
    async RegisterController(
        @Body('firstname') fullname:string,
        @Body('email') email:string,
        @Body('address') address:string,
        @Body('picture') picture:string,
        @Body('password') password: string,

    
    ){
        const userData = await this.regiseterUserService.registerUser(fullname, email,address,picture,password);
        return userData;
    }
}