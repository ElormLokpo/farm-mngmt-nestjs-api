import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserInterface } from './register.user.DTO';
const bcrypt = require('bcrypt');
import { JwtService } from '../jwt/jwt.services';

@Injectable()
export class LoginUserService{
    constructor(
        @InjectModel('UserModel') private readonly loginUserModel:Model<RegisterUserInterface>,
        private readonly jwtService:JwtService
    ){}


    async loginUser(email:string, password:string){
        const userExists = await this.loginUserModel.findOne({email});
        if(userExists){
            const is_valid = await bcrypt.compare(password, userExists.password);

            const filteredUser = {_id: userExists._id, fullname: userExists.fullname, email: userExists.email}
            if (is_valid){
                const token = this.jwtService.generateToken(filteredUser);
                return {filteredUser, token};
            }else{
                return null;
            }
        } else{
            return null;
        }
    }
}