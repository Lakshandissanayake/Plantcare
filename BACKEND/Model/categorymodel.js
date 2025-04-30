const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const categorySchema=new Schema({

  
   name:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    careInstruction:{
        type:String,
        required:true,
    },
    
    photo:{
        type:String,
        default:null,
    },
    noOfpalnts:{
        type:Number,
        required:true,
    },

    //  

});

module.exports = mongoose.model(
    "Category",
    categorySchema
);
 