import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {RegisterUserInterface} from './register.user.DTO';

@Injectable()
export class RegisterUserServices{
    constructor(
        @InjectModel('RegisterUserModel') private readonly registerUserModel: Model<RegisterUserInterface>
    ){}

    async registerUser(fullname:string, email:string, address:string,picture:string, password:string){
        const checkEmail = await this.registerUserModel.findOne({email});
        
        if (checkEmail){
            return null;

        }else{
            const userDataRaw = await this.registerUserModel.create({fullname,email,address,picture,password});
            const userDataFiltered = {_id: userDataRaw._id,fullname: userDataRaw.fullname,email:userDataRaw.email, address: userDataRaw.address};
            return userDataFiltered;
        }
        
        
    }

   
}
