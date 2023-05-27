import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserInterface } from './register.user.DTO';
const bcrypt = require('bcrypt');

@Injectable()
export class LoginUserService{
    constructor(
        @InjectModel('UserModel') private readonly loginUserModel:Model<RegisterUserInterface>
    ){}


    async loginUser(email:string, password:string){
        const userExists = await this.loginUserModel.findOne({email});
        if(userExists){
            const is_valid = await bcrypt.compare(password, userExists.password);

            const filteredUser = {_id: userExists._id, fullname: userExists.fullname, email: userExists.email}
            if (is_valid){
                return filteredUser;
            }else{
                return null;
            }
        } else{
            return null;
        }
    }
}