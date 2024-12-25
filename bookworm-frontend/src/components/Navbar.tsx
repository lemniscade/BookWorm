"use client";
import React, { useState } from "react";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import "../styles/Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerVisible, sethamburgerVisible] = useState(true);//düzelt

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    sethamburgerVisible((prev) => !prev);
  };

  return (
    <header className="navbar-container">
      <GridRow columns={2}>
        {/* Sol taraf: Logo */}
        {/* <GridColumn>
          <div className="navbar-logo">MyLogo</div>
        </GridColumn> */}
        {/* Orta taraf: Menü */}
        <GridColumn>
          <GridColumn style={`topnav${menuOpen ? " responsive" : ""}`} >
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </GridColumn>
        </GridColumn>
        {/* Sağ taraf: Hamburger ve Butonlar */}
        <GridColumn>
          <GridColumn style={`navbar-buttons ${hamburgerVisible ? " visibility" : ""}`}>
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>
            <GridColumn style="desktop-buttons">
              <button className="btn-login">Login</button>
              <button className="btn-signup">Sign Up</button>
            </GridColumn>
          </GridColumn>
        </GridColumn>
      </GridRow>
    </header>
  );
}

export default Navbar;
