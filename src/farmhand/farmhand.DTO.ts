const mongoose = require('mongoose');



export const FarmHandSchema = mongoose.Schema({
    name: {
        type: String,
        requred:true
    },
    farm:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'FarmModel'
    },
    role: {
        type:String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }


}, {timestamps:true})

export interface FarmHandDTO{
    name:string, 
    farm:string, 
    role:string,
    salary: number
}