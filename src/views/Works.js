import React from "react";
import { data } from "../data/data";

const Works = () => {
  return (
    <div name="works" className="w-full">
      <div className="bg-slate-100 flex flex-col px-[15%] py-[10%] items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 md:text-right">
            <p className="inline text-2xl font-semibold border-b-4 border-red-500 sm:text-4xl font-vol">
              {"Works"}
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item, i) => (
            <a target="_blank" href={item?.url} key={i} rel="noreferrer">
              <div className="flex flex-col items-center justify-center w-full cursor-pointer drop-shadow">
                <img
                  alt=""
                  src={item.image}
                  className="object-fill w-full h-40 duration-300 rounded-lg hover:scale-105"
                />
                <h1 className="py-2 text-xl font-bold text-center ">
                  {item.title}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
