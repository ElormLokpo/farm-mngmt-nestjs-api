import {Injectable, NestMiddleware} from '@nestjs/common';
import { NextFunction } from 'express';
import { JwtService } from '../jwt/jwt.services';
import { CustomRequest } from './custom.request';

@Injectable()
export class AuthMiddlewareService implements NestMiddleware{
    constructor(private readonly jwtService: JwtService){}

    use(req:CustomRequest, next:NextFunction){
        const token = req.headers.authorization?.split(' ')[1];

        const validateToken = this.jwtService.validateToken(token);

        if (validateToken){
            req.user = validateToken;
        }
        next();
    }


}

