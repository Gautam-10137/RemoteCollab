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
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
<br></br>
<br></br>
        <label> ConfirmPassword:</label>
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
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
        <label>
          <input
          type="checkbox" required />
          I agree to the terms and conditions
        </label>
<br></br>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
