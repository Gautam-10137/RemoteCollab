import React from 'react'

import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import CreateProject from '../Project/CreateProject';

const Dashboard = () => {
  return (
    <>
    <div className='flex'>
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col ">
     <Link className='ml-10 mt-4' to="/">Home</Link>
     <Link className='ml-10 mt-4'>My Projects</Link>
     <Link className='ml-10 mt-4'>My Tasks</Link>
     <Link className='ml-10 mt-4'>Calender</Link>
     <Link className='ml-10 mt-4'>Index</Link>
    </div>
    <div className='mt-4 ml-16 '>
      <button className='flex bg-blue-500 text-white rounded rounded-md w-32 h-8 text-center items-center justify-center '>
        <Link to ="/CreateProject" >Create Project</Link>
      {/* <img
              className="w-3 h-3 ml-2"
              src={require("../../asset/plus.png")}
              alt="plusimage"
            /> */}
      </button>
    </div>
    </div>
    </>
  )
}

export default Dashboard;
