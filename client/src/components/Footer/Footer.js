import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-950 p-6'>
    <div className='flex space-x-24 ml-[500px]'>
    <div class="w-10 h-10 bg-white rounded-full items-center justify-center flex">
    <img
              className="w-6 h-6 "
              src={require("../../asset/instagram2.png")}
              alt="instagram2image"
            />
    </div>
    <div class="w-10 h-10 bg-white rounded-full items-center justify-center flex">
    <img
              className="w-6 h-6"
              src={require("../../asset/facebook2.png")}
              alt="facebook2image"
            />
    </div>
    <div class="w-10 h-10 bg-white rounded-full items-center justify-center flex">
    <img
              className="w-6 h-6"
              src={require("../../asset/twitter.png")}
              alt="twitterimage"
            />
    </div>
    <div class="w-10 h-10 bg-white rounded-full items-center justify-center flex">
    <img
              className="w-6 h-6 "
              src={require("../../asset/youtube.png")}
              alt="youtubeimage"
            />
    </div>

    </div>
    <div className='flex space-x-24  text-sm ml-[400px] mt-7 text-white'>
      <p>Home</p>
      <p>News</p>
      <p>About</p>
      <p>Contact Us</p>
      <p>Our Team</p>
    </div>
    <div className=' relative py-6 w-full h-[40px] bg-black flex items-center justify-center mt-8'>
      <p className='text-white flex'>Copyright &copy;2024; Designed by &nbsp;
        <p className='text-slate-300'>REMOTE TEAM </p></p>
        
    </div>
    </footer>
  )
}

export default Footer;
