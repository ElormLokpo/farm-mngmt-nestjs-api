import {Injectable, NestMiddleware} from '@nestjs/common';
import {Response, NextFunction} from 'express';
import {CustomRequest} from './CustomRequest';
import { JwtService } from '../jwt/jwt.services';

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    constructor(private readonly jwtservice:JwtService){

    }
    use(req: CustomRequest, res: Response, next:NextFunction){ 
        const token = req.headers.authorization?.split(' ')[0];
        const verify_token = this.jwtservice.validateToken(token); 

        if(verify_token){
            req.user = verify_token;
        }
        else{
            return null;
        }



        next();
    }
}