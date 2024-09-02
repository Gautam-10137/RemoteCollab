import React from 'react'
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    
    <div>
      <nav >
     <div> 
      <img src={require("../../asset/logo.png")} alt="logoimage"/></div>
      <div ><p >Home</p></div>
      <div ><p >About us</p></div>
      <div ><p >Contact us</p></div>
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
      </nav>
    </div>
  );
};

export default Nav;
