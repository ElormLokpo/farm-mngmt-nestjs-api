import {Controller, Post, Get, Put, Delete, Body, Param} from '@nestjs/common';
import { FarmServices } from './farm.services';



@Controller('farm')
export class FarmController{
    constructor(
        private readonly farmservices:FarmServices
    ){}


    @Post('create')
    async createFarmController(
        @Body('name') name:string,
        @Body('location') location:string,
        @Body('size') size:number,
        @Body('farm_type') farm_type:string,
        @Body('capital') capital:number,
        @Body('owner') owner:string,
    ){
        const farmData = await this.farmservices.createFarm(
            name,
            location,
            size,
            farm_type,
            capital,
            owner);

        return farmData;
    }


    @Put('update/:id')
    async updateFarmController(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('location') location:string,
        @Body('size') size:number,
        @Body('farm_type') farm_type:string,
        @Body('capital') capital:number,
        @Body('owner') owner:string,
    ){
        const farmData = await this.farmservices.updateFarm(
            id,
            name,
            location,
            size,
            farm_type,
            capital,
            owner);

        return farmData;
    }

    @Get('find/:ownerId')
    async getFarmByOwnerController(
        @Param('ownerId') ownerId
        ){
            const farmData = await this.farmservices.getFarmByOwner(ownerId);
            return farmData;
    }

    @Get('find/:id')
    async getFarmByIdController(
        @Param('id') id:string
    ){
        const farmData = await this.farmservices.getFarm(id);
        return farmData;
    }

    @Get('find')
    async getAllFarmsController(){
        const farmData = await this.farmservices.getAllFarms();
        return farmData;
    }

    @Delete('delete/:id')
    async deleteFarmController(
        @Param('id') id:string
    ){
        const farmData = await this.farmservices.deleteFarm(id);
        return farmData;
    }
}