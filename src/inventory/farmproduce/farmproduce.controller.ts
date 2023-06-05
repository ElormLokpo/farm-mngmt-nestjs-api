import {Controller, Post, Get, Put, Delete, Body, Param, Patch} from '@nestjs/common';
import { FarmProduceServices } from './farmproduce.services';



@Controller('farmproduce')
export class FarmProduceController{
    constructor(
        private readonly farmproduceservices:FarmProduceServices
    ){}


    @Post('add')
    async addFarmProduceController(
        @Body('name') name:string,
        @Body('quantity') quantity:number,
        @Body('unit') unit:string,
        @Body('farm') farm:string,
        @Body('outOfStock') outOfStock:boolean,
        
    ){
        const farmProduceData = await this.farmproduceservices.addFarmProduce(
            name,
            quantity,
            unit,
            farm,
            outOfStock
           );

        return farmProduceData;
    }


    @Put('update/:id')
    async updateFarmProduceController(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('quantity') quantity:number,
        @Body('unit') unit:string,
        @Body('farm') farm:string,
        @Body('outOfStock') outOfStock:boolean,
    ){
        const farmproduceData = await this.farmproduceservices.updateFarmProduce(
            id,
            name,
            quantity,
            unit,
            farm,
            outOfStock);

        return farmproduceData;
    }

    @Patch('sell/:id')
    async sellFarmProduceController(
        @Param('id') id:string,
        @Body('quantity') quantity:number,
    
    ){
        const farmproduceData = await this.farmproduceservices.sellFarmProduce(
            id,
            quantity,
         );

        return farmproduceData;
    }

    @Get('find/:farmId')
    async getFarmProduceByFarmController(
        @Param('farmId') farmId:string
        ){
            const farmproduceData = await this.farmproduceservices.getFarmProduceByFarm(
                farmId,
             
             );
    
            return farmproduceData;
    }

  

    @Patch('outofstock/:id')
    async setOutOfStockController(
        @Param('id') id:string
    ){
        const farmproduceData = await this.farmproduceservices.setOutOfStock(
            id,
         
         );

        return farmproduceData;
    }

    @Delete('delete/:id')
    async deleteFarmProduceController(
        @Param('id') id:string
    ){
        const farmproduceData = await this.farmproduceservices.deleteFarmProduce(
            id,
         
         );

        return farmproduceData;
    }
}