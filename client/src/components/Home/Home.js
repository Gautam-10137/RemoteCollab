import React from 'react'


const Home = () => {
  return (
    <> 
    <div className='flex bg-green-100  rounded-2xl mt-3 lg:h-[400px] md:h-[300px] sm:h-[300px] h-[300px]'>
         <div>
            <div className='p-1 lg:w-[260px] md:w-[160px] sm:w-[100px] w-[100px] bg-fuchsia-100 mx-20 mt-10 rounded-xl shadow-lg text-center'>
              <p className='lg:text-[18px] md:text-[15px] sm:text-[10px] text-[10px]'>Unite Your Remote Workspace</p>
            </div>
            <h1 className="mx-20 mt-8 lg:text-[3.5rem] md:text-[2.5rem] sm:text-[1.5rem] text-[1.5rem] font-bold">Welcome to Remote Collab</h1>
            <p className='mx-20 mt-4 lg:text-xl md:text-md sm:text-sm text-xs'>Your Ultimate Solution for seamless Remote Team Collaboration. 
              Designed with remote <br></br>teams in mind, our platform integrates 
              everything you need to stay organized and<br></br> productive. </p>
          <div className='mx-20 mt-10 space-x-10 flex'>
            <button className='p-1 w-[120px] h-10 rounded-xl shadow-lg border-2 bg-purple-600 border-purple-600 text-white font-semibold '>Get Started</button>
            <button className='p-1 w-[120px] h-10 rounded-xl shadow-lg border-2 border-purple-600 bg-white font-semibold '>How it Works</button>
          </div>
         </div>
         <div className='mt-7 lg:ml-[200px] md:ml-[100px] sm:ml-[100px] ml-[100px] max-w-full'>
          <img src={require("../../asset/image1.png")} alt='image of home page' className="w-full h-auto sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"/>
         </div>
    </div>
    </>
  )
}

export default Home;
