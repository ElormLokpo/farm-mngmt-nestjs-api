import {Controller, Post, Body} from '@nestjs/common';
import { LoginUserService } from './login.user.services';
import { RegisterUserServices } from './register.user.services';


@Controller('auth')
export class AuthUserController{
    constructor(
        private readonly regiseterUserService: RegisterUserServices,
        private readonly loginUserService: LoginUserService
    ){}

    @Post('register')
    async RegisterController(
        @Body('fullname') fullname:string,
        @Body('email') email:string,
        @Body('address') address:string,
        @Body('picture') picture:string,
        @Body('password') password: string,
        @Body('isFarmer') isFarmer:string
    
    ){
        const userData = await this.regiseterUserService.registerUser(fullname, email,address,picture,password, isFarmer);
        return userData;
    }

    @Post('login')
    async LoginController(
        @Body('email') email:string,
        @Body('password') password:string
    ){
        const userData = await this.loginUserService.loginUser(email,password);
        return userData;
    }
}