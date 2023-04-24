import React from "react";
import './Header.css';
import { Default, Desktop, } from "../../Layouts/Responsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderDefault from "./HeaderDefault";

export default function Header() {
  return (
    <>
      <Desktop>
        <HeaderDesktop/>
      </Desktop>
      <Default>
        <HeaderDefault/>
      </Default>
    </>
  );
}
