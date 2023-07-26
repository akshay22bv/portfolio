import React, { useState } from "react";
import { FaBars, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsPersonLinesFill } from "react-icons/bs";
import { GithubUrl, LinkedInUrl, facebookUrl } from "../App";

import Resume from "../assets/akshay_resume.pdf";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="z-50 fixed bg-white top-0 border-gray-500 py-3 shadow  w-full">
      <div className="flex items-center justify-between xl:max-w-7xl max-w-full xl:m-auto px-[8%] flex-wrap">
        {/* name tag */}
        <div className="">
          <p className="md:text-3xl text-2xl font-bold font-vol">
            Akshay
            <span className="text-red-500">.</span>
          </p>
        </div>

        {/* hamburger */}
        <FaBars
          className="md:hidden block"
          onClick={() => setOpen((prev) => !prev)}
        />

        {/* navbar */}
        <nav
          className={`md:block ${
            open ? "block" : "hidden"
          } bg-white md:w-auto w-full md:flex items-center font-black`}
        >
          <ul className="text-base md:flex w-full">
            <li>
              <Link
                onClick={handleClose}
                smooth={true}
                duration={500}
                to="home"
                className="md:px-5 py-2  block hover:text-blue-600 font-semibold cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                duration={500}
                className="md:px-5 py-2 block hover:text-blue-600 font-semibold cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="works"
                smooth={true}
                duration={500}
                className="md:px-5 py-2 block hover:text-blue-600 font-semibold cursor-pointer"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to="skills"
                smooth={true}
                duration={500}
                className="md:px-5 py-2 block hover:text-blue-600 font-semibold cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                smooth={true}
                duration={500}
                to="contact"
                className="md:px-5 py-2 block hover:text-blue-600 font-semibold cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* social icons */}
        <div className="flex fixed flex-col top-[50%] left-0">
          <ul>
            <li className="hover:bg-white w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 hover:shadow-lg">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-around items-center"
              >
                Facecbook
                <FaFacebook size={30} className="text-[#3b5998]" />
              </a>
            </li>
            <li className=" hover:bg-white w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 hover:shadow-lg">
              <a
                href={GithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-around items-center"
              >
                GitHub
                <FaGithub size={30} />
              </a>
            </li>
            <li className=" hover:bg-white w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 hover:shadow-lg">
              <a
                href={LinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-around items-center"
              >
                LinkedIn
                <FaLinkedinIn size={30} className="text-[#0A66C2]" />
              </a>
            </li>

            <li className="hover:bg-white w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 hover:shadow-lg">
              <a
                href={Resume}
                download="Resume"
                className="w-full flex justify-around items-center"
              >
                Resume
                <BsPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
