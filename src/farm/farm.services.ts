import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FarmDTO } from "./farm.DTO";
import { Model} from "mongoose";


@Injectable()
export class FarmServices{
    constructor(
        @InjectModel('FarmModel') private readonly farmmodel:Model<FarmDTO>
    ){}

    async createFarm(name:string, location:string, size:number, farm_type:string, capital:number, owner:string){
        const farmData = await this.farmmodel.create({
            name,
            location,
            size,
            farm_type,
            capital,
            owner
        });

        return farmData;
    }

    async updateFarm(id:string, name:string, location:string, size:number, farm_type:string, capital:number, owner:string){
        const farmData = await this.farmmodel.findByIdAndUpdate(id, {
            name,
            location,
            size,
            farm_type,
            capital,
            owner
        }, {new:true});
        
        return farmData;
    }

    async getFarmByOwner(ownerId:string){
        const farmData =  await this.farmmodel.find({owner:ownerId});
        return farmData;
    };

    async getFarm(farmId:string){
        const farmData =  await this.farmmodel.findById(farmId);
        return farmData;
    };

    async getAllFarms(){
        const farmData = await this.farmmodel.find();
        return farmData;
    }

    async deleteFarm(farmId:string){
        const farmData =  await this.farmmodel.findByIdAndDelete(farmId);
        return farmData;
    };

}