import React from 'react'
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
  <>  
    <nav className=' bg-slate-300 '>
    <div className='flex relative w-full h-12'>
         <div>
             <img src={require("../../asset/logo.png")} alt="logoimage"/>
         </div>
         <div className='flex text-center space-x-4 mt-[10px] relative  '>
             <p>Features</p>
             <p>Resources</p>
             <p>Demo</p>
         </div>
         <div className='ml-[940px] mt-[10px] relative space-x-2  '>
             <Link className="bg-blue-200 w-[124px] h-[45px] border border"  to="/login">Login</Link>
             <Link className="bg-pink-200 w-[124px] h-[45px]"  to="/register">Register</Link>
         </div>
    </div>
   </nav>
   </>
  );
};

export default Nav;
