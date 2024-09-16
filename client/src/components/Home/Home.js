import React from 'react'


const Home = () => {
  return (
    <> 
    <div className='flex bg-green-100  rounded-2xl mt-2'>
         <div>
            <div className='p-1 max-w-[260px] bg-fuchsia-100 mx-8 mt-10 rounded-xl shadow-lg'>
              <p>Unite Your Remote Workspace</p>
            </div>
            <h1 className="mx-8" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to Remote Collab</h1>
            <p className='mx-8'>Your Ultimate Solution for seamless Remote Team Collaboration. 
              Designed with remote teams in mind, our platform integrates 
              everything you need to stay organized and productive. </p>
          <div className='mx-8 mt-8 space-x-10'>
            <button className='p-1 max-w-[260px] rounded-xl shadow-lg border-2 bg-purple-400 border-purple-400'>Get Started</button>
            <button className='p-1 max-w-[260px] rounded-xl shadow-lg border-2 border-purple-400'>How it Works</button>
          </div>
         </div>
         <div className='mt-20'>
          <img src={require("../../asset/image1.png")} alt=''/>
         </div>
    </div>
    </>
  )
}

export default Home;
