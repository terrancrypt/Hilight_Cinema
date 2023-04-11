import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="space-x-5 text-sm font-semibold ">
      <a className="hover:text-blue-400 transition-all" href="/">
        Home
      </a>
      <a className="hover:text-blue-400 transition-all" href="/#listmovie">List Movies</a>
      <a className="hover:text-blue-400 transition-all" href="/#cineplex">Cineplex</a>
    </div>
  );
};

export default Navbar;
