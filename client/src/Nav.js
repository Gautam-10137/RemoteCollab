import React from 'react'

const Nav = () => {
  return (
    <>
    <div>
      <nav className=' flex justify-evenly'>
     <div> <img src={require("./asset/logo.png")} alt="logoimage"/></div>
      <div className='flex'><p className=' text-2xl font-bold'>Home</p>
      <h2>About us</h2>
      <h2>Contact us</h2></div>
      <div>LOGIN</div>
      </nav>
    </div>
    </>
  )
};

export default Nav;
