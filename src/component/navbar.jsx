import { Link, useNavigate } from "react-router-dom";
import { GiVanillaFlower } from "react-icons/gi";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <div className="flex w-full justify-between fixed pt-8 z-50">
      <div className="ml-10 flex items-center text-[30px] gap-3 font-bold text-[#00ff8e] ">
        <GiVanillaFlower /> Core
      </div>
      <div className="flex items-center">
        <Link to={"/login"}>
          <button
            onClick={handleLogout}
            className="mr-10 border-2 p-2 border-[#00ff8e] rounded-[8px] transition duration-500 font-[800] text-white hover:bg-[#00ff8e] "
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
