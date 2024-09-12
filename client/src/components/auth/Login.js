import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/AuthSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newErrors = {};

    if(!formData.email){
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "password is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // console.log(formData);
      dispatch(login(formData));
      setFormData({
        email: "",
        password: "",
      });
      setIsPasswordVisible(false);
    } else {
      alert(JSON.stringify(formErrors));
    }

  };
  return (
    <>
      <div className="flex items-center justify-center md:mt-[40px] sm:mt-[20px]">
        <div className="bg-gradient-to-r from-pink-400 to-yellow-200 w-[333px] h-[629px]">
          <div className=" md:mt-7 sm:mt-4 lg:7 bg-transparent">
            <img src={require("../../asset/logo.png")} alt="logoimage" />
          </div>
          <h1 className="font-bold text-4xl  text-center mt-[60px]  text-white">
            Welcome Onboard
          </h1>
          <div className="lg:ml-[120px] lg:mt-[20px] md:ml-[120px] md:mt-[20px] sm:ml-[110px] sm:mt-[20px] items-end text-right">
            <img src={require("../../asset/person.png")} alt="personimage" />
          </div>
          <p className="mt-[25px] md:text-left lg:text-center sm:text-right text-center lg:ml-[100px] md:ml-[100px] sm:ml-[70px] ml:[70px] mr-4 text-white lg:text-xl md:text-xl sm:text-xl text-xs">
            Sign up and unlock new
            <br></br>
            experience!
          </p>
          <div className="flex lg:space-x-9 md:space-x-7 sm:space-x-6 space-x-4 mt-[70px]">
            <p className="text-white ml-6">Follow:</p>
            <img
              className="w-6 h-6"
              src={require("../../asset/linkedin.png")}
              alt="linkedinimage"
            />
            <img
              className="w-6 h-6"
              src={require("../../asset/instagram.png")}
              alt="instagramimage"
            />
            <img
              className="w-6 h-6"
              src={require("../../asset/facebook.png")}
              alt="facebookimage"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-100 to-slate-300 w-[333px] h-[629px]">
          <h1 className="font-bold text-3xl mt-9 text-center">Login</h1>
          <div className="text-left lg:ml-9 md:ml-8 sm:ml-7 ml-6 lg:mt-9 md:mt-8 sm:mt-7 mt-6 lg:mr-4 md:mr-3 sm:mr-3 mr-6">
            {!showForgotPassword ? (
              <form onSubmit={handleSubmit}>
                <br></br>

                <br></br>
                <br></br>
                <label className="text-[14px]">Email:</label>
                <br></br>
                <input
                  className="rounded-md w-[250px] border border-gray-400 mt-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />
                <br></br>
                <br></br>
                <label className="text-[14px]">Password:</label>
                <br></br>
                <div className="relative flex items-center w-full">
                <input
                  className="rounded-md w-[250px] border border-gray-400 mt-2"
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                />
                    <button
                  className="absolute lg:right-[40px] right-[10px] md:right-[45px] sm:right-[40px] cursor-pointer mt-[7px]"
                  onClick={handlePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <img
                      className="w-4 h-4"
                      src={require("../../asset/hide.png")}
                      alt="hideimage"
                    />
                  ) : (
                    <img
                      className=" w-4 h-4"
                      src={require("../../asset/show.png")}
                      alt="showimage"
                    />
                  )}
                </button>
                </div>
                
                <button
                  className="text-blue-600 text-[12px] lg:ml-40 md:ml-36 sm:ml-24 "
                  type="submit"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>
                <br></br>
              
                
                <button
                  className="text-center ml-16 mt-10 bg-black text-white w-[124px] h-[31px] text-sm rounded-2xl"
                  type="submit"
                >
                  Login
                </button>
                <br></br>
              </form>
            ) : (
              <ForgotPassword />
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
