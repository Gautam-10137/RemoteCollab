import { useState } from "react";


const Register=()=>{



  const[formData,setFormData]=useState({
  name:"",
  email:"",
  password:"",
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(formData.name && formData.email && formData.password){
      alert("form submitted successfully!")
    setFormData({
      name:"",
      email:"",
      password:""
    });
  }
    else {
      alert("please fill the values!");
    }
    

    // const result=await fetch("http://localhost:5000/api/auth/register",{
    //   method:"POST",
    //   ContentType:'text/html'
      

    // })

  };

   return (
    <>
    <form>
    <label>name:</label>
    <input 
    type="text"
    value={formData.name}
    onChange={handleInput}
    name="name"
    />

<label>email:</label>
    <input 
    type="email"
    value={formData.email}
    onChange={handleInput}
    name="email"
    />

<label>password:</label>
    <input 
    type="password"
    value={formData.password}
    onChange={handleInput}
    name="password"
    />


    <button onClick={handleSubmit}>register</button>

    </form>
    </>
   )
}

export default Register;