import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./UserMenu";
import Logo from "./Logo";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";
import './Header.css';

export default function Header() {
  return (
    <div className="container flex justify-between items-center h-20">
      <Logo />
      <Navbar />
      <UserMenu/>
    </div>
  );
}
