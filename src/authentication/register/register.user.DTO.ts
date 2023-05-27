const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

export const RegisterUserSchema = new mongoose.Schema({
    fullname:{
        type: String, 
        required: true},
    email:{
        type:String, 
        validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Not a valid email type'],
        required: true
    },
   
    address:{
        type:String,
        required: true
    },
    picture: {
        type: String, 
        default: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
    },
  
    password:{
        type: String, 
        min: [8, 'Password should be at least 8 characters'],

    }
}, { timestamps: true })

RegisterUserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


export interface RegisterUserInterface {
    fullname: string,
    email: string, 
    address: string,
    pricture?: string,
    password: string

}