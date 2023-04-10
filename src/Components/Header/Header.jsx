import React from "react";
import './Header.css';
import { Desktop, Tablet } from "../../Layouts/Responsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderTablet from "./HeaderTablet";

export default function Header() {
  return (
    <>
      <Desktop>
        <HeaderDesktop/>
      </Desktop>
      <Tablet>
        <HeaderTablet/>
      </Tablet>
    </>
  );
}
