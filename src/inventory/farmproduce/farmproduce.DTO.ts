const mongoose = require('mongoose');



export const FarmProduceSchema = mongoose.Schema({
    name: {
        type: String,
        requred:true
    },
    quantity: {
        type: Number,
       
    },
    unit: {
        type: String,
    },
    farm:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FarmModel'
    },
    outOfStock:{
        type: Boolean,
        default: false
    }
  

}, {timestamps:true})

export interface FarmProduceDTO{
   name: string,
   quantity: number,
   unit: string, 
   farm:string,
   outOfStock: boolean
}