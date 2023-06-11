import {Controller, Post, Get, Put, Delete, Body, Param} from '@nestjs/common';
import { FarmHandServices } from './farmhand.services';



@Controller('farmhand')
export class FarmHandController{
    constructor(
        private readonly farmhandservices:FarmHandServices
    ){}


    @Post('create')
    async createFarmHandController(
        @Body('name') name:string,
        @Body('farm') farm:string,
        @Body('role') role:string,
        @Body('salary') salary:number,
        
    ){
        const farmHandData = await this.farmhandservices.addFarmHand(
            name,
            farm, 
            role,
            salary);

        return farmHandData;
    }


    @Put('update/:id')
    async updateFarmHandController(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('farm') farm:string,
        @Body('role') role:string,
        @Body('salary') salary:number,
    ){
        const farmHandData = await this.farmhandservices.updateFarmHand(
            id,
            name,
            farm, 
            role,
            salary);

        return farmHandData;
    }

    @Get('find/:farmId')
    async getFarmHandByFarmController(
        @Param('farmId') farmId
        ){
            const farmHandData = await this.farmhandservices.getFarmHandsByFarm(farmId);
            return farmHandData;
    }

    @Get('find/:id')
    async getFarmHandByIdController(
        @Param('id') id:string
    ){
        const farmHandData = await this.farmhandservices.getFarmHand(id);
        return farmHandData;
    }

    @Get('find')
    async getAllFarmHandsController(){
        const farmHandData = await this.farmhandservices.getAllFarmHands();
        return farmHandData;
    }

    @Delete('delete/:id')
    async deleteFarmHandController(
        @Param('id') id:string
    ){
        const farmHandData = await this.farmhandservices.deleteFarmHand(id);
        return farmHandData;
    }
}