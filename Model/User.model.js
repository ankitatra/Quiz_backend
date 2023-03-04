const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    avtar:String,
    level:String,
    wrong:Number,
    correct:Number,
    score:Number,
    administration:Boolean
});

const userModel=mongoose.model("UserData",UserSchema)
module.exports={userModel};