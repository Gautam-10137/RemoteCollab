const Project = require("../model/Project");
const Task = require("../model/Task");
const User = require("../model/User");
const ProjectServices = {
    createProject: async (detail) => {
      try {
        const { name, description, members,tasks } = detail;
        
        const newProject = new Project({ name, description, members });
        await newProject.save();
  
      const updated=await Project.findById(newProject._id);
        
        return updated ;
      } catch (err) {
        console.error("Error creating a new Project: " + err.message);
        throw err;
      }
    }
  };
  
  module.exports = ProjectServices;
  