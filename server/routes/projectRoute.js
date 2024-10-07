const express=require('express');
const ProjectController = require('../controller/ProjectController');
const projectRouter=express.Router();

projectRouter.post('/',ProjectController.createProject);

module.exports=projectRouter;