import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FarmHandDTO } from "./farmhand.DTO";
import { Model} from "mongoose";


@Injectable()
export class FarmHandServices{
    constructor(
        @InjectModel('FarmHandModel') private readonly farmhandmodel:Model<FarmHandDTO>
    ){}

    async addFarmHand(name:string, farm:string, role:string, salary:number){
        const farmHandData = await this.farmhandmodel.create({
            name,
            farm, 
            role,
            salary
        });

        return farmHandData;
    }

    async updateFarmHand(id:string, name:string, farm:string, role:string, salary:number){
        const farmHandData = await this.farmhandmodel.findByIdAndUpdate(id, {
            name,
            farm, 
            role,
            salary
        }, {new:true});
        
        return farmHandData;
    }

    async getFarmHandsByFarm(farmId:string){
        const farmHandData =  await this.farmhandmodel.find({farm:farmId});
        return farmHandData;
    };

    async getFarmHand(id:string){
        const farmHandData =  await this.farmhandmodel.findById(id);
        return farmHandData;
    };

    async getAllFarmHands(){
        const farmHandData = await this.farmhandmodel.find();
        return farmHandData;
    }

    async deleteFarmHand(id:string){
        const farmHandData =  await this.farmhandmodel.findByIdAndDelete(id);
        return farmHandData;
    };

}