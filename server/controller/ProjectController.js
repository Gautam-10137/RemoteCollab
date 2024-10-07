const ProjectServices = require("../services/ProjectService");

const ProjectController={
    createProject:async (req,res)=>{
        try{
            const detail=req.body;
            console.log(detail);
            const newProject=await  ProjectServices.createProject(detail);
            res.status(201).json({newProject});
          }catch(err){
            console.error('Error adding new Project: '+err.message);
            res.status(500).send({message:'Error adding new project'});
          }

    }
}

module.exports=ProjectController;