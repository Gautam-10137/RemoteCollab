import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

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
    if(!formData.name)newErrors.name = "userName is required";
    if(!formData.email){
      newErrors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        newErrors.email = "Email is invalid"
    }
    if(!formData.password)newErrors.password = "password is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setIsPasswordVisible(false);
    } else {
      alert(JSON.stringify(formErrors));
    }

    // const result=await fetch("http://localhost:5000/api/auth/register",{
    //   method:"POST",
    //   ContentType:'text/html'

    // })
  };
  return (
    <>
    {!showForgotPassword ? (
      <form onSubmit={handleSubmit}>
        <br></br>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
          
        />
<br></br>
<br></br>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          
        />
<br></br>
<br></br>
        <label>Password:</label>
        <input
          type={isPasswordVisible ? "text" :"password"}
          name="password"
          value={formData.password}
          onChange={handleInput}
          
        />

        <label>
          <input
          type="checkbox"
          checked={isPasswordVisible}
          onChange={handlePasswordVisibility}
          />
          Show Password
        </label>
<br></br>
<br></br>
        <button type="submit">Login</button>
<br></br>
        <button type="submit" onClick={()=> setShowForgotPassword(true)}>Forgot Password?</button>
      </form>
    ) : (
      <ForgotPassword/>
    )}

    </>
  );
};

export default Login;
