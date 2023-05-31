import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {Strategy} from 'passport-google-oauth20';
import { RegisterUserServices } from '../auth/register.user.services';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(private readonly registeruserservice: RegisterUserServices,private readonly configService:ConfigService){
        super({
          clientID: configService.get<string>('CLIENT_ID'),
          clientSecret: configService.get<string>('CLIENT_SECRET'),
          callbackURL: configService.get<string>('CALLBACK_URL'),
          scope: ['profile', 'email']
        })
    }

    async validate(accessToken: any, refreshToken: any, profile:any){

        const {id, displayName, emails} = profile;
        const email = emails[0].value;
        const fullname = displayName;
        

        const userData = await this.registeruserservice.registerFromGoogle(fullname, email)

        return {accessToken,userData};

    }

   
}