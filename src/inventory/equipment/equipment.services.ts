import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EquipmentDTO } from "./equipment.DTO";
import { Model} from "mongoose";


@Injectable()
export class EquipmentServices{
    constructor(
        @InjectModel('EquipmentModel') private readonly equipmentmodel:Model<EquipmentDTO>
    ){}

    async addEquipment(name:string, farm:string, is_rented:boolean, for_rent:boolean, rate: number, picture:string){
        const EquipmentData = await this.equipmentmodel.create({
           name, 
           farm,
           is_rented,
           for_rent,
           rate,
           picture
        });

        return EquipmentData;
    }

    async updateEquipment(id:string, name:string, farm:string, is_rented:boolean, for_rent:boolean, rate: number, picture:string){
        const EquipmentData = await this.equipmentmodel.findByIdAndUpdate(id, {
            name, 
            farm,
            is_rented,
            for_rent,
            rate,
            picture
        }, {new:true});
        
        return EquipmentData;
    }

    async getEquipmentByFarm(farmId:string){
        const EquipmentData =  await this.equipmentmodel.find({farm:farmId});
        return EquipmentData;
    };

    async getEquipment(id:string){
        const EquipmentData =  await this.equipmentmodel.findById(id);
        return EquipmentData;
    };

    async getAllEquipment(){
        const EquipmentData = await this.equipmentmodel.find();
        return EquipmentData;
    }

    async deleteEquipment(id:string){
        const EquipmentData =  await this.equipmentmodel.findByIdAndDelete(id);
        return EquipmentData;
    };

}