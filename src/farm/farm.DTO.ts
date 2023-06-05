const mongoose = require('mongoose');



export const FarmSchema = mongoose.Schema({
    name: {
        type: String,
        requred:true
    },
    location: {
        type: String,
       
    },
    size: {
        type: Number
    },
    farm_type:{
        type:String,
        enum: ['crop', 'animal'],
        default: 'crop'
    },
    capital: {
        type: Number
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    }

}, {timestamps:true})

export interface FarmDTO{
    name:string,
    location?: string,
    size?: number,
    farm_type?: string,
    capital?: number,
    owner: string
}