const mongoose=require("mongoose");

const tudoSchema=new mongoose.Schema({
    tudo:{
       type:String,
    },
    // id:String
})
// const tudomodel=mongoose.model("tudolist",tudoSchema)
const tudomodel=mongoose.model("tudos",tudoSchema)
module.exports= tudomodel;