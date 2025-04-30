const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plantName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    plantArea:{
        type:String,
        required:true,
    },
    wateringFrequency:{
        type:String,
        required:true,
    },
    // addedDate:{
    //     type:Date,
    //     required:true,
    // },
    plantImage:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.models.plantModel || mongoose.model("plantModel", plantSchema);