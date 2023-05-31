import { Injectable } from "@nestjs/common/decorators";
import { sign, verify } from 'jsonwebtoken';


@Injectable()
export class JwtService{
    secret = 'SHAMBALA';

    generateToken(payload){
        const token = sign(payload, this.secret, {expiresIn:30});
        return token;
    }

    validateToken(token){
        const verified_token = verify(token, this.secret);
        return verified_token;
    }


}