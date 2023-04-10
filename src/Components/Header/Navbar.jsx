import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="space-x-5 text-sm font-semibold">
      <a href="/">
        Home
      </a>
      <a href="/#listmovie">List Movies</a>
      <a href="/#cineplex">Cineplex</a>
    </div>
  );
};

export default Navbar;
