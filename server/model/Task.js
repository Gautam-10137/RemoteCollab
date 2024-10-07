const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:["to-do","in-progress","completed"],
        default:"to-do"
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"medium"
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    },
    assignedDate:{
        type:Date,
        default:Date.now()
    },
    dueDate:{
        type:Date
    }

},{
   timestamps:true
 }
);
const Task=mongoose.model("Task",taskSchema);

module.exports=Task;