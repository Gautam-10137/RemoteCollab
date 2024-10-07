const express=require('express');
const router=express.Router();
const {register,login}=require('../controller/AuthController');
const projectRouter = require('./projectRoute');
router.post("/auth/register",register);
router.post("/auth/login",login);
router.use("/project/",projectRouter);

module.exports=router;