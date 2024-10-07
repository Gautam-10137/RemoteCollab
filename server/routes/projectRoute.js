const express=require('express');
const ProjectController = require('../controller/ProjectController');
const TaskController = require('../controller/TaskController');
const projectRouter=express.Router();

projectRouter.post('/',ProjectController.createProject);
projectRouter.get('/get/:userId',ProjectController.fetchProjects);
projectRouter.post('/:projectId/member',ProjectController.addMemberToProject);
projectRouter.post('/:projectId/task',TaskController.createTask);
module.exports=projectRouter;