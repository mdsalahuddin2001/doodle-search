import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

import searchIcon from "../assets/search.png";
function Navbar({ setDarkTheme, darkTheme }) {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center sace-x-5 w-screen">
        <Link to="/">
          <p className="flex items-center text-2xl bg-orange-500 text-white py-1 px-2 rounden dark:bg-gray-50 dark:text-gray-900">
            <span>Doodle </span>{" "}
            <img src={searchIcon} alt="search" className="w-5 h-5" />
          </p>
        </Link>
        <button
          type="button"
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-1 hover:shadow-lg"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
