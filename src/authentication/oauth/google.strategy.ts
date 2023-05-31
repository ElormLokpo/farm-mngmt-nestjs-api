import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {Strategy} from 'passport-google-oauth20';
import { googleCredentials } from './google.credentials';
import { RegisterUserServices } from '../auth/register.user.services';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(private readonly registeruserservice: RegisterUserServices){
        super({
            clientID:googleCredentials.clientID,
            clientSecret: googleCredentials.clientSecret,
            callbackURL: googleCredentials.callbackURL,
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