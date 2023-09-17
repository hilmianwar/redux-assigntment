import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userList } from "../redux/slice/userSlice";
import Navbar from "../component/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userList);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-wrap gap-20 pt-40 bg-gray-900 w-full">
        {users.map((items) => (
          <div className="flex items-center justify-center">
            <div className="user-card relative w-[350px] h-[140px] bg-black transition duration-500 rounded-[10px] my-[40px] mx-[20px] hover:h-[220px] hover:mb-[-40px] hover:translate-y-[-30px]">
              <div className="user-line absolute inset-0 overflow-hidden rounded-[10px]"></div>
              <div className="user-image absolute w-[150px] h-[150px] top-[-50px] left-1/2 translate-x-[-50%] bg-black overflow-hidden z-20 rounded-[10px]">
                <img
                  className=" absolute top-2.5 left-2.5 z-10 rounded-[3px]"
                  src={items.avatar}
                  alt=""
                />
              </div>
              <div className="user-content absolute w-full h-full overflow-hidden text-white flex justify-center items-end text-center">
                <div className="user-detail text-center w-full translate-y-[60px] leading-[30px]">
                  <div className="user-name text-[#00ff8e] w-full">
                    <h3>
                      {items.first_name} {items.last_name}
                    </h3>
                  </div>
                  <div className="user-email">
                    <h4>{items.email}</h4>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="mr-3 border border-[#00ff8e] px-[20px] rounded-md hover:bg-[#00ff8e]">
                      Edit
                    </button>
                    <button className="mr-3 border border-[#00ff8e] px-[8px] rounded-md hover:bg-[#00ff8e]">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
