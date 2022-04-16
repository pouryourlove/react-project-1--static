import React from "react";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="logo" />
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
