import React, { useEffect, useState } from "react";
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

  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 fixed ${
        !scroll ? "bg-slate-100 " : "bg-white shadow border-gray-500"
      } top-0  py-3   w-full`}
    >
      <div className="flex items-center justify-between xl:max-w-7xl max-w-full xl:m-auto px-[8%] flex-wrap">
        {/* name tag */}
        <div className="">
          <p className="text-2xl font-bold text-black md:text-3xl font-vol animate-bounce">
            Akshay
            {/* <span className="text-red-500">.</span> */}
          </p>
        </div>

        {/* hamburger */}
        <FaBars
          className="block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />

        {/* navbar */}
        <nav
          className={`md:block ${open ? "block" : "hidden"} ${
            scroll ? "bg-white" : "bg-slate-100"
          } md:w-auto w-full md:flex items-center font-black`}
        >
          <ul className="w-full text-base md:flex">
            <li>
              <Link
                onClick={handleClose}
                smooth={true}
                duration={500}
                to="home"
                className="block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600"
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
                className="block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600"
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
                className="block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600"
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
                className="block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600"
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
                className="block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600"
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
                className="flex items-center justify-around w-full"
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
                className="flex items-center justify-around w-full"
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
                className="flex items-center justify-around w-full"
              >
                LinkedIn
                <FaLinkedinIn size={30} className="text-[#0A66C2]" />
              </a>
            </li>

            <li className="hover:bg-white w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 hover:shadow-lg">
              <a
                href={Resume}
                download="Resume"
                className="flex items-center justify-around w-full"
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
