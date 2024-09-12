const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const bodyParser=require('body-parser');
const PASSWORD=process.env.PASSWORD;
const router=require('./routes/route')
const app=express();
mongoose.connect("mongodb+srv://pahwagautam47:gautam123@cluster0.c7o3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("Connected to mongodb");
})
.catch((error)=>{
   console.log("Error connecting to mongodb:"+ error.message);
})

app.use(cors({
   origin:['http://localhost:3000','http://127.0.0.1:3000'],
   method:['GET','POST','PUT','DELETE']
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api",router);



app.listen(5000,()=>{
    console.log("Server is running at port: 5000");
})