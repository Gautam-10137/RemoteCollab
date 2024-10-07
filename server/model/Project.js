const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }],
    members:[{
       userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
       },
       role:{
        type:String,
        enum:["admin","manager","member"]
       }
    }]
  } ,{timestamps:true}
);

const Project=mongoose.model("Project",projectSchema);

module.exports=Project;