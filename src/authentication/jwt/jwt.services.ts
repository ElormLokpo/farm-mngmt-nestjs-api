import {Injectable} from '@nestjs/common';
import {sign, verify} from 'jsonwebtoken';

@Injectable()
export class JwtService{
    secret = 'SHAMBALA';
     
    generateToken(payload:any){
        const token = sign(payload, this.secret,{expiresIn: 30});
        return token;
    }

    validateToken(token:any){
        try{
            const verifiedToken = verify(token, this.secret);
            return verifiedToken;
        }catch(e){
            return null;
        }
       
    }
}