import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <>
      <nav className=" bg-slate-300 p-2">
        <div className="flex relative w-full h-1container mx-auto flex justify-between items-center">
          <div className="">
            <img src={require("../../asset/logo.png")} alt="logoimage" />
          </div>
          <div className="flex text-center space-x-14 text-pink-700">
            <p className="flex">Features
            <img className="w-[16px] h-[16px] mt-[7px]" src={require("../../asset/down-arrow.png")} alt="down-arrowimage" />
            </p>
            <p>Resources</p>
            <p>Demo</p>
          </div>
          <div className="flex space-x-4">
            <Link className="bg-blue-200 w-[70px] text-center  bg-pink-500 text-white rounded-lg border border-gray-600" to="/login">
              Login
            </Link>
            <Link className="bg-pink-200 w-[70px] text-center bg-pink-500 text-white rounded-lg border border-gray-600" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>

  );
};

export default Nav;
