import { useState } from "react";
import React from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePasswordVisibility = ()=> {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = ()=> {
    const newErrors = {};
    if(!formData.name)newErrors.name = "UserName is required";
    if(!formData.email)newErrors.email = "Email is required";
    // this below method is a regular expression to check email
    if(!/\S+@\S+\.\S+/.test(formData.email))newErrors.email = "Email is invalid";
    if(!formData.password)newErrors.password = "Password is required";
    if(formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Password don not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
        alert("Registered Successfully!");
        // here need to write a code to send the data to backend and after that
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
      });
      setIsPasswordVisible(false);
      // reset function is used only when onSubmit is applied on form, only to remove clicked checkbox value
      e.target.reset();
     
    } else {
      // converte the object into string
      alert(JSON.stringify(formErrors));
    }

    // const result=await fetch("http://localhost:5000/api/auth/register",{
    //   method:"POST",
    //   ContentType:'text/html'
    // })
  };

  return (
    <>
    <div className="flex mt-[5px] ml-[450px] border-2 border-gray-400 w-[666px] h-[629px]">
      <div className="bg-gradient-to-r from-pink-400 to-yellow-200 w-[333px] h-[629px]">
        <div className=" mt-7  bg-transparent">
      <img src={require("../../asset/logo.png")} alt="logoimage"/>
      </div>
       <h1 className="font-bold text-4xl text-center mt-[100px] text-white">Welcome Onboard</h1>
       <div className="ml-[120px] mt-[20px]">
       <img src={require("../../asset/person.png")} alt="personimage"/>
       </div>
       <p className="mt-[25px] text-left ml-[100px] mr-4 text-white text-xl">Sign up and unlock new
        <br></br>
       experience!</p>
       <div className="flex space-x-9 mt-[70px]">
        <p className="text-white ml-6">Follow:</p>
        <img className="w-6 h-6" src={require("../../asset/linkedin.png")} alt="linkedinimage"/>
        <img className="w-6 h-6" src={require("../../asset/instagram.png")} alt="instagramimage"/>
        <img className="w-6 h-6" src={require("../../asset/facebook.png")} alt="facebookimage"/>
       </div>
      </div>
      <div className="bg-gradient-to-r from-slate-100 to-slate-300 w-[333px] h-[629px]">
        <h1 className="font-bold text-3xl mt-9 text-center">Register</h1>
        <div className="text-left ml-9 mt-9">
      <form onSubmit={handleSubmit}>
        <br></br>
        <label className="text-[14px]">Name:</label>
        <br></br>
        <input className="rounded-md w-[250px] border border-gray-400 mt-2"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}          
        />
<br></br>
<br></br>
        <label className="text-[14px]">Email:</label>
        <br></br>
        <input className="rounded-md w-[250px] border border-gray-400 mt-2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}          
        />
<br></br>
<br></br>
        <label className="text-[14px]">Password:</label>
        <br></br>
        <input className="rounded-md w-[250px] border border-gray-400 mt-2"
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
<br></br>
<br></br>
        <label className="text-[14px]"> Confirm Password:</label>
        <br></br>
        <input className="rounded-md w-[250px] border border-gray-400 mt-2"
          type={isPasswordVisible ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInput}
        />
       
        <label className="text-sm mt-">
          <input 
           type="checkbox"
           checked={isPasswordVisible}
            onChange={handlePasswordVisibility}
          />        
          Show Password
        </label>
<br></br>
<br></br>
        <label className="text-[12px] ">
          <input
          type="checkbox" required />
          &nbsp;I agree to the terms and conditions.
        </label>
<br></br>
        <button className="text-center ml-16 mt-16 bg-black text-white w-[124px] h-[31px] text-sm rounded-2xl" type="submit">Register</button>
      </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Register;
