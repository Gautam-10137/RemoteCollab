import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 lg:p-6 md:p-4 sm:p-3 p-3">
      <div className="flex lg:space-x-24 md:space-x-16 sm:space-x-14 space-x-10 ml-[500px]">
        <div class="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 w-4 h-4 bg-white rounded-full items-center justify-center flex">
          <img
            className=" lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 w-4 h-4"
            src={require("../../asset/instagram2.png")}
            alt="instagram2image"
          />
        </div>
        <div class="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 w-4 h-4 bg-white rounded-full items-center justify-center flex">
          <img
            className="lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 w-4 h-4"
            src={require("../../asset/facebook2.png")}
            alt="facebook2image"
          />
        </div>
        <div class="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 w-4 h-4 bg-white rounded-full items-center justify-center flex">
          <img
            className="lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 w-4 h-4"
            src={require("../../asset/twitter.png")}
            alt="twitterimage"
          />
        </div>
        <div class="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 w-4 h-4 bg-white rounded-full items-center justify-center flex">
          <img
            className="lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 w-4 h-4 "
            src={require("../../asset/youtube.png")}
            alt="youtubeimage"
          />
        </div>
      </div>
      <div className="flex space-x-24  text-sm ml-[400px] mt-7 text-white">
        <p>Home</p>
        <p>News</p>
        <p>About</p>
        <p>Contact Us</p>
        <p>Our Team</p>
      </div>
      <div className=" relative py-6 w-full h-[40px] bg-black flex items-center justify-center mt-8">
        <p className="text-white flex">
          Copyright &copy;2024; Designed by &nbsp;
          <p className="text-slate-300">REMOTE TEAM </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
