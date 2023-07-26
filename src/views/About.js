import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full lg:h-screen bg-slate-100">
      <div className="bg-slate-100 m-auto px-[15%] sm:px-[20%] flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8">
            <p className="text-4xl font-vol inline font-semibold border-b-4 border-red-500">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8">
          <div className="md:text-right pb-8 ">
            <p className="text-4xl">
              Hi, I'm Akshay, nice to meet you, Please take a look around,
            </p>
          </div>
          <div className=" pb-8">
            <p className="text-1xl">
              I am a passionate front-end developer with a strong foundation in
              web development technologies. With 1 years of experience, I have
              developed expertise in creating engaging and responsive user
              interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
