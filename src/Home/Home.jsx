import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className=" h-screen ">
      <div className=" w-full h-10 bg-green-500 flex items-center pl-20 gap-4 text-white font-bold">
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Logout</Link>
      </div>
      <div className="  flex items-center justify-center text-3xl text-gray-600">
        Home screen
      </div>
    </div>
  );
};

export default Home;
