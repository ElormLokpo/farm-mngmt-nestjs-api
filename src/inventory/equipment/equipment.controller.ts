import {Controller, Post, Get, Put, Delete, Body, Param} from '@nestjs/common';
import { EquipmentServices } from './equipment.services';



@Controller('equipment')
export class EquipmentController{
    constructor(
        private readonly equipmentservices:EquipmentServices
    ){}


    @Post('create')
    async AddEquipmentController(
        @Body('name') name:string,
        @Body('farm') farm:string,
        @Body('is_rented') is_rented:boolean,
        @Body('for_rent') for_rent:boolean,
        @Body('rate') rate:number,
        @Body('picture') picture:string,


        
    ){
        const EquipmentData = await this.equipmentservices.addEquipment(
            name, 
           farm,
           is_rented,
           for_rent,
           rate,
           picture);

        return EquipmentData;
    }


    @Put('update/:id')
    async upEquipmentController(
        @Param('id') id:string,
        @Body('name') name:string,
        @Body('farm') farm:string,
        @Body('is_rented') is_rented:boolean,
        @Body('for_rent') for_rent:boolean,
        @Body('rate') rate:number,
        @Body('picture') picture:string,
    ){
        const EquipmentData = await this.equipmentservices.updateEquipment(
            id,
            name, 
            farm,
            is_rented,
            for_rent,
            rate,
            picture);

        return EquipmentData;
    }

    @Get('find/:farmId')
    async getEquipmentByFarmController(
        @Param('farmId') farmId
        ){
            const EquipmentData = await this.equipmentservices.getEquipmentByFarm(farmId);
            return EquipmentData;
    }

    @Get('find/:id')
    async getEquipmentByIdController(
        @Param('id') id:string
    ){
        const EquipmentData = await this.equipmentservices.getEquipment(id);
        return EquipmentData;
    }

    @Get('find')
    async getAllEquipmentController(){
        const EquipmentData = await this.equipmentservices.getAllEquipment();
        return EquipmentData;
    }

    @Delete('delete/:id')
    async deleteEquipmentController(
        @Param('id') id:string
    ){
        const EquipmentData = await this.equipmentservices.deleteEquipment(id);
        return EquipmentData;
    }
}