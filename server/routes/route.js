const express=require('express');
const router=express.Router();
const {register,login}=require('../controller/AuthController');
const projectRoute = require('./projectRoute');
const taskRoute=require('./TaskRoutes');
const UserServices = require('../services/UserService');
router.post("/auth/register",register);
router.post("/auth/login",login);
router.get('/user/detail/:email',UserServices.fetchUser);

// ,authenticate
router.use('/project',projectRoute);
// authenticate,
router.use('/task',taskRoute);

module.exports=router;