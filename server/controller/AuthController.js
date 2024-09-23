const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../model/User')
const dotenv=require('dotenv');
dotenv.config();
const register=async (req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user=await User.findOne({email:email});
        if(user){
            res.status(400).json({message:"User with given mail already exists!"});
            return;
        }
        const newUser=new User({username,email,password});
        
        bcrypt.hash(password,10,async(err,hashed)=>{
             newUser.password=hashed;
             await newUser.save(); 
        })
      
        res.status(201).json({user:newUser});
        // res.status(201).json({"message" :"registered successfully"});
         
    }catch(err){
        console.log(err.message);
        res.status(400).json({"message":"invalid client details"});
    }
}

const login= async (req,res)=>{
  try{
      const {email,password}=req.body;
      console.log(req.body);
      const user= await User.findOne({email});
      if(!user){
        res.status(400).json({message:"Invalid Email"});
        return;
      }
      const passwordMatch=await bcrypt.compare(password,user.password);
      if(!passwordMatch){
        res.status(400).json({message:"Invalid Password"});
        return;
      }
      const payload={id:user._id,name:user.username,email:user.email};
      const token=jwt.sign(payload,process.env.SECRET,{'expiresIn':'1h'});
      const msg=`Bearer ${token}`;
      res.status(200).json({token:msg});

  }catch(err){
    console.log("Error Login: "+ err.message);
    res.status(400).json({"message":"invalid client details"});
  }
}
module.exports={register,login};
