import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
   const { pathname } = useLocation();
  const Clicker = () => {
    console.log(pathname);
    console.log("merge");
  };
  return (
    <div
      id="header"
      className="flex items-center justify-between z-20 w-full h-[8vh] bg-theme sticky border-b-[5px] border-text_color1 top-0"
    >
      <h1
        id="tester"
        onClick={Clicker}
        className="absolute cursor-pointer font-Buck text-[3vh] left-3 text-text_color1 z-10"
      >
        Rentify
      </h1>
      {pathname != "/discover" && <form className="absolute inset-0 flex justify-center items-center  ">
        {" "}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-[30vw] h-[6vh]  p-4 pl-10 text-sm  border rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-text_color1 focus:border-text1"
            placeholder="Search something to rent..."
            required
          ></input>
          <button
            type="submit"
            className="text-white flex items-center justify-center h-[50%] absolute right-2.5 bottom-2.5 bg-text_color1 hover:bg-pearl_green focus:ring-4 focus:outline-none focus:ring-navigator_color font-medium rounded-lg text-sm px-[1vw] py-[2vh] "
          >
            Search
          </button>
        </div>
      </form>} 
      <div className="absolute flex items-center justify-center min-h-screen right-0">
        <div className="border w-fit rounded-xl m-5 shadow-sm">
          <button className="px-4 py-2 rounded-l-xl text-white m-0  hover:bg-pearl_green transition">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-4 py-2 rounded-r-xl bg-text_color1 hover:bg-pearl_green transition">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

//
