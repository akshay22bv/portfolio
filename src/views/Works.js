import React from "react";
import { data } from "../data/data";

const Works = () => {
  return (
    <div name="works" className="w-full">
      <div className="bg-slate-100 flex flex-col px-[15%] py-[10%] items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8">
            <p className="text-2xl sm:text-4xl font-vol inline font-semibold border-b-4 border-red-500">
              {"Works"}
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item, i) => (
            <a target="_blank" href={item?.url} key={i} rel="noreferrer">
              <div className="flex flex-col items-center justify-center drop-shadow cursor-pointer w-full">
                <img
                  alt=""
                  src={item.image}
                  className="h-40 w-full rounded-lg object-fill hover:scale-105 duration-300"
                />
                <h1 className=" font-bold text-xl py-2 text-center">
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
