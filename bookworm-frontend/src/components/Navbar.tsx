"use client";
import React, { useState } from "react";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import "../styles/Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  if (menuOpen) {
    return (
      <header className="navbar-container">
        <GridRow columns={3}>
          {/* Sol taraf: Logo */}
          <GridColumn>
            <div className="navbar-logo">MyLogo</div>
          </GridColumn>

          {/* Orta taraf: Menü */}
          <GridColumn>
            <GridColumn style={`navbar-menu open`} >
              <GridRow>
                <GridRow>
                  <a href="#home">Home</a>
                </GridRow>
                <GridRow>
                  <a href="#about">About</a>
                </GridRow>
                <GridRow>
                  <a href="#services">Services</a>
                </GridRow>
                <GridRow>
                  <a href="#contact">Contact</a>
                </GridRow>
              </GridRow>
            </GridColumn>
          </GridColumn>



          {/* Sağ taraf: Hamburger ve Butonlar */}
          <GridColumn>
            <GridColumn style="navbar-buttons">
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
    )

  } else {
    return (<header className="navbar-container">
      <GridRow columns={3}>
        {/* Sol taraf: Logo */}
        <GridColumn>
          <div className="navbar-logo">MyLogo</div>
        </GridColumn>

        {/* Orta taraf: Menü */}
        <GridColumn>
          <GridColumn style={`navbar-menu`} >
            <GridColumn>
              <GridColumn>
                <a href="#home">Home</a>
              </GridColumn>
              <GridColumn>
                <a href="#about">About</a>
              </GridColumn>
              <GridColumn>
                <a href="#services">Services</a>
              </GridColumn>
              <GridColumn>
                <a href="#contact">Contact</a>
              </GridColumn>
            </GridColumn>
          </GridColumn>
        </GridColumn>

        {/* Sağ taraf: Hamburger ve Butonlar */}
        <GridColumn>
          <GridColumn style="navbar-buttons">
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
    </header>)
  }

}

export default Navbar;
