import React, { useState } from "react";
import { links } from "../nav/links";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

//Icons
import { BsArrowLeftShort } from "react-icons/bs";
import { TbLetterD } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import { MdAccountCircle} from "react-icons/md";
// Icons

import "../App.css";

const Sidebar = () => {
  const { open, setOpen, screenSize, themeSettings,
    setThemeSettings } = useStateContext();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleCloseSideBar = () => {
    if (open && screenSize <= 900) {
      setOpen(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div
      className={`h-screen flex flex-col relative bg-slate-200 dark:bg-backgrao p-5 pt-2 ${
        open ? "w-72" : "w-20"
      } duration-300`}
    >
      <BsArrowLeftShort
        onClick={toggleSidebar}
        className={`bg-backgrao text-white text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && "rotate-180"}`}
      />

      <div className="mt-4">
        <div>
          <TbLetterD
            className={`bg-red-600 text-white mr-2 text-4xl rounded cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Derivatory</h1>
        </div>

        <div className="pt-6 ">
          {links.map((item) => (
            <div key={item.title} className="mb-6">
              <div className="text-gray-400 mb-2 uppercase">{item.title}</div>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="text-red-600 text-2xl pr-2">{link.icon}</span>
                  <span className={`capitalize text-white duration-300  ${!open && "hidden"}`}>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}

          <div className="pt-6">
            <button
              onClick={() => setThemeSettings(true)}
              className={"flex"}
            >
              <span className="text-red-600 text-2xl pr-2">
                <BsArrowLeftShort />
              </span>
              <span className={`capitalize text-white duration-300 ${!open && "hidden"}`}>
                Settings
              </span>
            </button>
          </div>
 
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
