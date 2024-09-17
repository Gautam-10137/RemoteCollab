import React from 'react'


const Home = () => {
  return (
    <> 
    <div className='flex bg-green-100  rounded-2xl mt-3 lg:h-[400px] md:h-[400px] sm:h-[600px] h-[500px]'>
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
         <div className='mt-[30px] mr-[100px]'>
          <img src={require("../../asset/image1.png")} alt='image of home page' className="w-full h-auto sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"/>
         </div>
    </div>

    {/* 2nd part */}
    <div className=' bg-white  rounded-2xl mt-3 p-3 h-[700px]'>
      <h1 className='ml-[300px] mt-8 text-[1.5rem] font-bold text-purple-600'>Why Choose RemoteCollab?</h1>
<div className='flex items-center justify-center'>
      <div className='bg-purple-100 border-2 text-center border-gray-700 rounded-md p-4 m-4 h-[250px] w-[300px]'>
        <p className='text-[1rem] font-bold text-black'>Real-Time Chat</p>
        <img className='p-4 ml-[33px] justify-center items-center ' src={require("../../asset/realTime.png")} alt='realTime chat'/>
        <p className='text-[1rem]  text-black'>Stay Connected with your team Instantly.</p>
      </div>
      
      <div className='bg-purple-100 border-2 text-center border-gray-700 rounded-md p-4 m-4 h-[250px] w-[300px]'>
        <p className='text-[1rem] font-bold text-black'>Task & Project Management</p>
        <img className='p-4 ml-[45px] justify-center items-center ' src={require("../../asset/TaskManage.png")} alt='realTime chat'/>
        <p className='text-[1rem]  text-black'>Organize task, set deadlines and assign team members.</p>
      </div>
      <div className='bg-purple-100 border-2 text-center border-gray-700 rounded-md p-4 m-4 h-[250px] w-[300px]'>
        <p className='text-[1rem] font-bold text-black'>File Sharing</p>
        <img className='p-4 ml-[65px] justify-center items-center ' src={require("../../asset/fileSharing.png")} alt='realTime chat'/>
        <p className='text-[1rem]  text-black'>Share important documents securely with your team.</p>
      </div>
</div>
<div className='flex items-center justify-center'>
      <div className='bg-purple-100 border-2 text-center border-gray-700 rounded-md p-4 m-4 h-[250px] w-[300px]'>
        <p className='text-[1rem] font-bold text-black'>Analytics Dashboard</p>
        <img className='p-4 ml-[50px] justify-center items-center ' src={require("../../asset/Analytical.png")} alt='realTime chat'/>
        <p className='text-[1rem]  text-black'>Track Project Progress and key perfromances metrics.</p>
      </div>
      <div className='bg-purple-100 border-2 text-center border-gray-700 rounded-md p-4 m-4 h-[250px] w-[300px]'>
        <p className='text-[1rem] font-bold text-black'>Integration</p>
        <img className='p-4 ml-[70px] justify-center items-center ' src={require("../../asset/Integation.png")} alt='realTime chat'/>
        <p className='text-[1rem]  text-black'>Sync with your calendar and other producticty tools.</p>
      </div>
</div>
    </div>
    </>
  )
}


export default Home;
