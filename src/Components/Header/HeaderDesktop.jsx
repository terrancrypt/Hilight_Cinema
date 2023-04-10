import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";
import './Header.css';

export default function HeaderDesktop() {
  return (
    <div className="container flex justify-between items-center h-20">
      <Logo />
      <Navbar />
      <UserMenu/>
    </div>
  );
}
