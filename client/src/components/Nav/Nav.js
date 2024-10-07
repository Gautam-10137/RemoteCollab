import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/auth/AuthSlice";
import downArrow from "../../asset/down-arrow.png";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownResource = useRef(null);
  const [isResourceOpen, setIsResourceOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    //for the features
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleResourceDropdown = () => {
    //for the resource
    setIsResourceOpen(!isResourceOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutsideResource = (event) => {
    if (
      dropdownResource.current &&
      !dropdownResource.current.contains(event.target)
    ) {
      setIsResourceOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isResourceOpen) {
      document.addEventListener("mousedown", handleClickOutsideResource);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideResource);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideResource);
    };
  }, [isResourceOpen]);

  return (
    <>
      <nav className="bg-slate-300 p-2">
        <div className="flex relative w-full h-1container mx-auto justify-between items-center">
          <div>
            <img src={require("../../asset/logo.png")} alt="logoimage" />
          </div>
          <div className="flex text-left space-x-14 text-black text-sm font-semibold ">
            {/* Features Dropdown */}
            <div className="relative flex items-center">
              <span>Features</span>
              <img
                className="w-[16px] h-[16px] mt-[7px] cursor-pointer"
                src={downArrow}
                alt="down-arrowimage"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-10 left-0 bg-white shadow-2xl p-4 w-[350px] z-10 mt-4 bg-slate-100"
                >
                  <div className="list-disc pl-5 space-y-1">
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/deal.png")}
                        alt="dealimage"
                      />
                      <span>Real-time Collaboration</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/prioritize.png")}
                        alt="prioritizeimage"
                      />
                      <span>Task Management</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/user-login.png")}
                        alt="userloginimage"
                      />
                      <span>User Roles and Permissions</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/calendar.png")}
                        alt="calendarimage"
                      />
                      <span>Calendar Integration</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/bell.png")}
                        alt="bellimage"
                      />
                      <span>Notification System</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/performance.png")}
                        alt="performanceimage"
                      />
                      <span>Time Tracking</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/dashboard.png")}
                        alt="dashboardimage"
                      />
                      <span>Project Dashboard</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/monitor.png")}
                        alt="monitorimage"
                      />
                      <span>Analytics and Reporting</span>
                    </p>
                    <br></br>
                    <p className="flex items-center space-x-3">
                      <img
                        className="w-5 h-5"
                        src={require("../../asset/monitor.png")}
                        alt="monitorimage"
                      />
                      <span>Customizable Workspaces</span>
                    </p>
                    <br></br>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navbar Links */}
            <div className="relative flex items-center">
              <span>Resources</span>
              <img
                className="w-[16px] h-[16px] mt-[7px] cursor-pointer"
                src={downArrow}
                alt="down-arrowimage"
                onClick={toggleResourceDropdown}
              />
              {isResourceOpen && (
                <div
                  ref={dropdownResource}
                  className="absolute top-10 left-0 bg-white shadow-2xl p-4 w-[550px] z-10 mt-4 bg-slate-100"
                >
                  <div className="flex space-x-28 ml-16 text-md">
                    <p>
                      Learn
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/info.png")}
                          alt="infoimage"
                        />
                        <span>About us</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/order.png")}
                          alt="orderimage"
                        />
                        <span>What's new</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/blog.png")}
                          alt="blogimage"
                        />
                        <span>Blog</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/certicate.png")}
                          alt="certicateimage"
                        />
                        <span>Get certified</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/product-description.png")}
                          alt="product-descriptionimage"
                        />
                        <span>Customer stories</span>
                      </div>
                    </p>

                    <p>
                      Support
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/support.png")}
                          alt="supportimage"
                        />
                        <span>Help center</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/customer-support.png")}
                          alt="customersupportimage"
                        />
                        <span>24/7 support</span>
                      </div>
                      <div className="flex space-x-3 mt-5 font-normal text-sm">
                        <img
                          className="w-5 h-5 "
                          src={require("../../asset/partners.png")}
                          alt="partnersimage"
                        />
                        <span>Partners</span>
                      </div>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <button className="mt-1">Demo</button>
          </div>

          {/* Authenticated User */}
          {isAuthenticated ? (
            <>
              <div className="font-bold text-lg ">Hi, {user.name}</div>
              <button onClick={() => dispatch(logOut())} className="bg-blue-200 w-[70px] text-center bg-pink-500 text-white rounded-lg border border-gray-600">Logout</button>
            </>
          ) : (
            <div className="flex space-x-4">
              <Link
                className="bg-blue-200 w-[70px] text-center bg-pink-500 text-white rounded-lg border border-gray-600"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-pink-200 w-[70px] text-center bg-pink-500 text-white rounded-lg border border-gray-600"
                to="/register"
              >
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
