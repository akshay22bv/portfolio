import React, { useState } from "react";
import HTML from "../assets/html.png";
import React_JS from "../assets/react_new.png";
import CSS from "../assets/css.png";
import NODEJS from "../assets/node_js.png";
import REACTNATIVE from "../assets/react_new.png";
import JAVASCRIPT from "../assets/javascript.jpg";
import FONTAWESOME from "../assets/fontawesome.png";
import GITLAB from "../assets/gitlab_new.png";
import NPM from "../assets/npm_new.png";
import MATERIAL from "../assets/material_ui.png";
import GITHUB from "../assets/github.png";
import BOOTSTRAP from "../assets/bootstarp_new.avif";
import WORDPRESS from "../assets/wordpress.png";
import POSTMAN from "../assets/postman_png.png";

const Skills = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div name="skills" className="w-full lg:h-screen">
      <div className="bg-slate-100 flex flex-col px-[15%] py-[10%] items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 md:text-right">
            <p className="inline text-2xl font-semibold border-b-4 border-red-500 sm:text-4xl font-vol">
              {!isChecked ? "Skills" : "Tools"}
            </p>
          </div>
          <div className="">
            <label className="flex items-center cursor-pointer toggle">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div className="p-1 transition duration-300 ease-in-out bg-gray-300 rounded-full slider w-14 h-7">
                <div
                  className={`rounded-full w-5 h-5 bg-white shadow-md transform transition duration-300 ease-in-out ${
                    isChecked ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </div>
              <span className="ml-2 text-green-700">
                {!isChecked ? "Skills" : "Tools"}
              </span>
            </label>
          </div>
        </div>

        <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8">
          <div className="pb-8 md:text-right ">
            <p className="text-2xl sm:text-4xl">
              These are technologies used in my experiance
            </p>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {!isChecked ? (
              <>
                <LogoContainer logo={HTML} text={"HTML"} />
                <LogoContainer logo={React_JS} text={"React js"} />
                <LogoContainer logo={CSS} text={"CSS"} />
                <LogoContainer logo={NODEJS} text={"Node js"} />
                <LogoContainer logo={REACTNATIVE} text={"React Native"} />
                <LogoContainer logo={JAVASCRIPT} text={"Javascript"} />
                <LogoContainer logo={WORDPRESS} text={"Wordpress"} />
              </>
            ) : (
              <>
                <LogoContainer logo={GITHUB} text={"Github"} />
                <LogoContainer logo={GITLAB} text={"GitLab"} />
                <LogoContainer logo={BOOTSTRAP} text={"Bootstrap"} />
                <LogoContainer logo={FONTAWESOME} text={"Font Awesome"} />
                <LogoContainer logo={NPM} text={"NPM"} />
                <LogoContainer logo={MATERIAL} text={"Material UI"} />
                <LogoContainer logo={POSTMAN} text={"Postman"} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

const LogoContainer = ({ logo, text }) => {
  return (
    <div className="w-[80px] h-full  bg-white overflow-hidden whitespace-nowrap font-semibold font-sans shadow-md hover:scale-105 duration-300 text-center rounded-md">
      <img
        className="w-[40px] h-[40px] pt-2 mx-auto animate-pulse"
        src={logo}
        alt=""
      ></img>
      <p className="my-1 text-[10px] md:text-sm">{text}</p>
    </div>
  );
};
