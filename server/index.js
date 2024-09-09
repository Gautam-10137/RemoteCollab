const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const bodyParser=require('body-parser');
const PASSWORD=process.env.PASSWORD;

const app=express();
mongoose.connect("mongodb+srv://pahwagautam47:gautam123@cluster0.c7o3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("Connected to mongodb");
})
.catch((error)=>{
   console.log("Error connecting to mongodb:"+ error.message);
})

app.listen(5000,()=>{
    console.log("Server is running at port: 5000");
})