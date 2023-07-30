import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-100">
      <div className="bg-slate-100 m-auto px-[15%] sm:px-[20%] flex flex-col justify-center w-full h-full">
        <p className="py-1 text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl">Akshay Bilagi</h1>
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
            <button className="flex items-center px-3 py-3 text-white bg-red-500 rounded group hover:bg-red-600">
              View Skills
              <span className="ml-3 duration-500 group-hover:rotate-90">
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
