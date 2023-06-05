import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FarmProduceDTO } from "./farmproduce.DTO";
import { Model} from "mongoose";


@Injectable()
export class FarmProduceServices{
    constructor(
        @InjectModel('FarmProduceModel') private readonly farmproducemodel:Model<FarmProduceDTO>
    ){}

    async addFarmProduce(name:string, quantity:number, unit:string, farm:string, outOfStock:boolean){
        const farmProduceData = await this.farmproducemodel.create({
            name,
            quantity,
            unit,
            farm,
            outOfStock
          
        });

        return farmProduceData;
    }

    async updateFarmProduce(id:string, name:string, quantity:number, unit:string, farm:string, outOfStock:boolean){
        const farmProduceData = await this.farmproducemodel.findByIdAndUpdate(id, {
            name,
            quantity,
            unit,
            farm,
            outOfStock
        }, {new:true});
        
        return farmProduceData;
    }

    async sellFarmProduce(id:string, quantity:number){
        const farmProduce = await this.farmproducemodel.findById(id);
        let new_quantity;

        if(farmProduce.quantity > 0){
            new_quantity = farmProduce.quantity - quantity;
        } else if(farmProduce.quantity <= 0){
            new_quantity = farmProduce.quantity - 0;
            const farmProduceDataUp = await this.farmproducemodel.findByIdAndUpdate(id, {outOfStock:true}, {new:true});
        }
     

        const farmProduceData = await this.farmproducemodel.findByIdAndUpdate(id, {quantity: new_quantity}, {new:true});
        return farmProduceData;
    }

    async getFarmProduceByFarm(farmId:string){
        const farmProduceData =  await this.farmproducemodel.find({farm:farmId});
        return farmProduceData;
    };

    async setOutOfStock(id:string){
        const farmProduceData =  await this.farmproducemodel.findByIdAndUpdate(id, {outofStock: true}, {new:true});
        return farmProduceData;
    };

 
    async deleteFarmProduce(id:string){
        const farmProduceData =  await this.farmproducemodel.findByIdAndDelete(id);
        return farmProduceData;
    };

}