import { Injectable } from "@nestjs/common/decorators";
import { sign, verify } from 'jsonwebtoken';
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtService{
    constructor(
        private readonly configservice:ConfigService
    ){}

    secret = this.configservice.get<string>('JWT_SECRET');

    generateToken(payload){
        const token = sign(payload, this.secret, {expiresIn:30});
        return token;
    }

    validateToken(token){
        const verified_token = verify(token, this.secret);
        return verified_token;
    }


}