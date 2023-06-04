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
    hasFarmHands:{
        type: Boolean,
        default: true
    },
    

})