import React, { useState } from "react";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { TbLetterD } from "react-icons/tb";
//Icons


import { Link, NavLink } from "react-router-dom";

//Context Provider
import { useStateContext } from "../contexts/ContextProvider";
//Context Provider

import "../App.css";

const Sidebar = () => {
  const { open, setOpen, screenSize } = useStateContext(); // Using open and setOpen from Context

  const toggleSidebar = () => {
    setOpen(!open); // Toggle the value of open using setOpen
  };

  return (
    <div
      className={`h-screen flex flex-col relative bg-slate-200 dark:bg-backgrao p-5 pt-8 ${
        open ? "w-72" : "w-20" // Apply 'w-72' class when open is true, otherwise 'w-20'
      } duration-300`}
    >
      <BsArrowLeftShort
        onClick={toggleSidebar}
        className={`bg-backgrao text-white text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && "rotate-180"}`}
      />

      <div className="flex gap-x-4 items-center">
        <div><TbLetterD className={`bg-red-600 text-white mr-2 text-4xl rounded cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`}/></div>
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Derivatory</h1>
      </div>
    </div>
  );
};

export default Sidebar;
