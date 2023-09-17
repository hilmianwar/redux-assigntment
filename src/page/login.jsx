import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/loginSlice";

// import "../../index.css";
import { redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(response)) {
        navigate("/");
      }
      console.log("error login");
    } catch (error) {
      console.log("Login gagal", error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   dispatch(loginUser({ email, password }));
  //   if (status === "succeeded") navigate("/");
  // };

  const dispatch = useDispatch();
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const token = useSelector((state) => state.login.token);
  console.log("status", status);
  console.log("error", error);
  console.log("token", token);

  return (
    <div className="bg-gray-900">
      <div className="container flex justify-center items-center box-border text-white">
        <div className="box relative w-[400px] h-[500px] bg-black overflow-hidden rounded-[10px]">
          <div className="form absolute z-10 rounded-[10px] py-[50px] px-[40px] flex-col">
            <h2 className="text-[#00ff8e] text-center tracking-[8px]">Login</h2>
            <div className="input-box relative mt-[35px] w-[300px]">
              <input
                // onChange={handleChangeEmail}
                className=" relative w-full pt-[20px] px-[10px] pb-[10px] bg-transparent border-none outline-none text-black z-10"
                type="text"
                autoComplete="off"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className=" absolute left-0 pt-[20px] px-[10px] pb-[10px] text-[18px] text-gray pointer-events-none">
                Email
              </span>
              <i className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00ff8e] rounded-[4px] transition duration-500 pointer-events-none z-9"></i>
            </div>
            <div className="input-box relative mt-[35px] w-[300px]">
              <input
                className=" relative w-full pt-[20px] px-[10px] pb-[10px] bg-transparent border-none outline-none text-black font-bold z-10"
                type="password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className=" absolute left-0 pt-[20px] px-[10px] pb-[10px] text-[18px] text-gray ">
                Password
              </span>
              <i className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00ff8e] rounded-[4px] transition duration-500 pointer-events-none z-9"></i>
            </div>
            <button
              //   onClick={handleSubmit}
              className="w-full mt-8 bg-[#00ff8e] text-black rounded-[4px] py-[8px] font-bold"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className=" text-[13px] text-center mt-4">Or login with</p>
            <p className=" text-[13px] text-center">
              Don't have an account?{" "}
              <Link to="/register" className=" border-b">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
