import React from "react";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div name="contact" className="w-full lg:h-screen bg-slate-100">
      <div className="bg-slate-100 m-auto px-[15%] sm:px-[20%] flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8  md:text-right">
            <p className="inline text-4xl font-semibold border-b-4 border-red-500 font-vol">
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
            <p className="flex items-center p-1 md:justify-end">
              Banashankari 3rd Stage, Katriguppe, Bengaluru - 560085
            </p>
            <p className="text-[20px] flex md:justify-end items-center font-semibold">
              Phone &nbsp; <IoIosCall />
            </p>
            <p className="flex items-center p-1 md:justify-end">
              +91 9686721221
            </p>
            <p className="text-[20px] flex md:justify-end items-center font-semibold">
              Email &nbsp; <BiLogoGmail />
            </p>
            <p className="flex items-center p-1 md:justify-end">
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
                className="p-2 bg-white shadow"
                type="text"
                required
                placeholder="Your Name"
                name="name"
              ></input>
              <label className="py-1">Email</label>
              <input
                required
                className="p-2 bg-white shadow"
                type="text"
                placeholder="example@gmail.com"
                name="email"
              ></input>
              <label className="py-1">Message</label>
              <textarea
                required
                className="h-32 p-2 bg-white shadow"
                type="textarea"
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center px-3 py-3 my-4 text-white bg-red-500 rounded group hover:bg-red-600"
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
