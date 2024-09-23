import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/auth/AuthSlice";

const Nav = () => {
  const {isAuthenticated, user} = useSelector((state)=> state.auth);
  console.log('Current Auth State:', isAuthenticated, user);
  const dispatch = useDispatch();
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
            <p className="flex">Resources
            <img className="w-[16px] h-[16px] mt-[7px]" src={require("../../asset/down-arrow.png")} alt="down-arrowimage" />
            </p>
            <p>Demo</p>
          </div>
          {isAuthenticated ? (
              <>
              <div>Hi, {user.name}</div>
              <div><button onClick={()=> dispatch(logOut())}>Logout</button></div>
              </>
          ) : (
            <div className="flex space-x-4">
            <Link className="bg-blue-200 w-[70px] text-center  bg-pink-500 text-white rounded-lg border border-gray-600" to="/login">
              Login
            </Link>
            <Link className="bg-pink-200 w-[70px] text-center bg-pink-500 text-white rounded-lg border border-gray-600" to="/register">
              Register
            </Link>
          </div>
          )}

        </div>
      </nav>
    </>

  );
};

export default Nav;
