import React from "react";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div name="contact" className="w-full lg:h-screen bg-slate-100">
      <div className="bg-slate-100 m-auto px-[15%] sm:px-[20%] flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 md:text-right">
            <p className="text-4xl font-vol inline font-semibold border-b-4 border-red-500">
              Contact
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8">
          <div className="pb-8 md:text-right">
            <p className="text-[20px] flex md:flex-row md:justify-end items-center font-semibold">
              Address &nbsp; <ImLocation />
            </p>
            <p className="flex md:justify-end items-center p-1">
              Banashankari 3rd Stage, Katriguppe, Bengaluru - 560085
            </p>
            <p className="text-[20px] flex md:justify-end items-center font-semibold">
              Phone &nbsp; <IoIosCall />
            </p>
            <p className="flex md:justify-end items-center p-1">
              +91 9686721221
            </p>
            <p className="text-[20px] flex md:justify-end items-center font-semibold">
              Email &nbsp; <BiLogoGmail />
            </p>
            <p className="flex md:justify-end items-center p-1">
              Akshay22bv@gmail.com
            </p>
          </div>

          <div className="pb-8">
            <form
              action="https://getform.io/f/513534e9-f78b-4d4a-9fa3-10e3b55e7d39"
              method="POST"
              className="flex flex-col"
            >
              <label className="py-1">Name</label>
              <input
                className="bg-white p-2 shadow"
                type="text"
                required
                placeholder="Your Name"
                name="name"
              ></input>
              <label className="py-1">Email</label>
              <input
                required
                className="bg-white p-2 shadow"
                type="text"
                placeholder="example@gmail.com"
                name="email"
              ></input>
              <label className="py-1">Message</label>
              <textarea
                required
                className="bg-white p-2 shadow h-32"
                type="textarea"
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="my-4 flex justify-center items-center group px-3 py-3 bg-red-500 text-white hover:bg-red-600 rounded"
              >
                <p>Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
