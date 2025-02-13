const Project = require("../model/Project");
const Task = require("../model/Task");

const User = require("../model/User");
const { sendMail } = require("./AuthServices");
const { default: mongoose } = require("mongoose");
const TaskServices = {
  createTask: async (detail, projectId) => {
    try {
      const newTask = new Task({ ...detail.newTask, projectId: projectId });
      if (!newTask) {
        throw new Error("Incorrect Task Deatils ");
      }
      await newTask.save();
   
     await TaskServices.sendTaskMail(newTask,detail.project);
     
      await Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newTask._id },
      });
      const task=await Task.findById(newTask._id).populate('assignedTo');
      return task;
    } catch (err) {
      console.error("Error Creating Task:" + err.message());
      throw err;
    }
  },
  sendTaskMail: async(newTask,name)=>{
    for(const idx in newTask.assignedTo){
      const user= await User.findById(newTask.assignedTo[idx]);
  
       const msg = `
        <p>You have assigned a task in the Project:</p>
        <p><strong>Project Name:</strong> ${name}</p>
        <p><strong>Task Details:-</strong> </p>
        <p><strong>title:</strong>${newTask.title}</p>
        <p><strong>description:</strong>${newTask.description}</p>
        <p><strong>status:</strong>${newTask.status}</p>
        <p><strong>priority:</strong>${newTask.priority}</p>
        <p><strong>dueDate:<strong>${newTask.dueDate}</p>
      `;
       await sendMail(user.email,"New Task",msg); 
    }
  },
  fetchTaskFromDB: async (userId) => {
    try {
      const tasks = await Task.find({assignedTo:userId}).populate('assignedTo', 'name email').populate('projectId');
      if (!tasks) {
        return null;
      }
      return tasks;
    } catch (err) {
      console.error("Error fetching tasks");
    }
  },
  updateTaskStatusInDB: async (taskId, updatedStatus) => {
    try {
      const task = await Task.findByIdAndUpdate(taskId, 
        { $set :{status: updatedStatus} },{new:true});
      console.log(task);
      return task;
    } catch (err) {
      console.error("Error Updating Tasks");
    }
  },
  addAssignee: async (taskId, userId) => {
    try {
      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          $addToSet: { assignedTo: userId },
        },
        { new: true }
      ).populate("assignedTo");
      if (!task) {
        throw new Error("Incorrect Info provided.");
      }
      return task;
    } catch (err) {
      console.error("Error adding assignee");
      throw err;
    }
  },
  removeAssignee: async (taskId, userId) => {
    try {
      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          $pull: { assignedTo: userId },
        },
        { new: true }
      ).populate("assignedTo");
      if (!task) {
        throw new Error("Incorrect Info provided.");
      }
      return task;
    } catch (err) {
      console.error("Error removing assignee.");
      throw err;
    }
  },
  updateTaskFromDB: async(taskId,updatedDetails)=>{
    try{
      
        const updatedTask= await Task.findByIdAndUpdate(taskId,{
          $set:updatedDetails
        },{new:true,runValidators:true});
      
       if(!updatedTask){
        return res.status(400).send({message:'Invalid task details'});
       }
       return updatedTask;
         
    }catch(err){
      console.error("Error task updating");
      throw err;
    }

  }
};

module.exports = TaskServices;