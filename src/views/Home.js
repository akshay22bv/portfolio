import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-100">
      <div className="bg-slate-100 m-auto px-[15%] sm:px-[20%] flex flex-col justify-center w-full h-full">
        <p className="text-red-600 py-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl ">Akshay Bilagi</h1>
        <h1 className="text-4xl sm:text-6xl text-slate-700">
          I,m a Full Stack Developer
        </h1>
        <p className="py-4">
          I'm a full-stack developer specialing in building experiances.
          Currently, I'm focused on building responsive full-stack web
          applications.
        </p>

        <div className="">
          <Link to="skills" smooth={true} duration={500}>
            <button className="flex items-center group px-3 py-3 bg-red-500 text-white hover:bg-red-600 rounded">
              View Skills
              <span className="ml-3 group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight size={30} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
