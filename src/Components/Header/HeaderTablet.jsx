import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";
import "./Header.css";

export default function HeaderTablet() {
  const [toggle, setToggle] = useState(false);
  let handleButtonMenu = () => {
    let button = document.querySelector(".buttonMenu");
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="container flex justify-between items-center h-20 relative">
      {/* <Logo />
      <Navbar />
      <UserMenu/> */}
      <Logo />
      <div>
        <button onClick={handleButtonMenu} className="buttonMenu pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div
          className={
            !toggle
              ? "menu__content hidden"
              : "menu__content flex flex-col items-center space-y-5 text-center text-sm bg-white text-black font-semibold w-full h-auto z-50 absolute top-2 right-0 rounded p-5"
          }
        >
          <button
            onClick={handleButtonMenu}
            className="buttonMenu absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <a href="/">Home</a>
          <a href="/#listmovie">List Movies</a>
          <a href="/#cineplex">Cineplex</a>
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
