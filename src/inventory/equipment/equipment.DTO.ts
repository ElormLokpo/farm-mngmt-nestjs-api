const mongoose = require('mongoose');



export const EquipmentSchema = mongoose.Schema({
    name: {
        type: String,
        requred:true
    },
    farm:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'FarmModel'
    },
    is_rented: {
       type: Boolean,
       default: false

    },
   for_rent:{
    type: Boolean, 
    default: false
   },
   rate:{
    type: Number
   },
   picture:String


}, {timestamps:true})

export interface EquipmentDTO{
    name: string, 
    farm: string, 
    is_rented: boolean,
    for_rent: boolean,
    rate: number,
    picture:string
}