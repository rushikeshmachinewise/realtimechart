const mongoose=require("mongoose");

const chartinputSchema=new mongoose.Schema({
    data : [{
    name: String,
    value:Number
    }]
});

const InputModel2=mongoose.model("chartsinput2",chartinputSchema);
module.exports=InputModel2
