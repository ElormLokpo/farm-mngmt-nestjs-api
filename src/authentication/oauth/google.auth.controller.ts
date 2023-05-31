import {Controller, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';

@Controller('auth')
export class GoogleAuthController{
 

    @UseGuards(AuthGuard('google'))
    @Get('google')
    googleLoginController(){
     
    }

    @UseGuards(AuthGuard('google'))
    @Get('google/callback')
    googleCallbackController(){
    
    }
}