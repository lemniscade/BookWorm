"use client";
import React, { useState } from "react";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import Image from 'next/image'
import UserCircle from "../../public/images/UserCircle";
import ShoppingCart from "../../public/images/ShoppingCart";
import "../component_styles/Navbar.scss";
import GridSystem from "./GridSystem";
import Xmark from "../../public/images/Xmark";
import Hamburger from "../../public/images/Hamburger";
import SearchBar from "./SearchBar";
//todo: sticky yap
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [xOpen, setXOpen] = useState(false);

  const toggleX = () => {
    setXOpen((prev) => !prev);
    setMenuOpen((prev) => !prev);
  }
  return (
    <GridSystem>
      <GridRow style="navbar-container gap" columns={3}>
        <GridColumn>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={50}
          />
        </GridColumn>
        <GridColumn style="center">
          <UserCircle />
        </GridColumn>
        <GridColumn style="center">
          <ShoppingCart />
        </GridColumn>
      </GridRow>
      <GridRow style="navbar-container" columns={3}>
        <GridColumn style={`gap-row${menuOpen ? "" : " navbar-menu"}`}>
          <GridColumn style={`navbar-buttons`}>
            <button className="hamburger-menu" onClick={toggleX}>
              <Hamburger />
            </button>
          </GridColumn>
          <GridColumn style="desktop-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </GridColumn>
        </GridColumn>

        <GridColumn style={`${menuOpen ? "" : " navbar-menu"}`}>
          <SearchBar />
        </GridColumn>

        <GridColumn style={`topnav${xOpen ? " responsive" : " nonresponsive"}`} >
          <GridRow columns={1} style="xmark">
            <button className="svg-button" onClick={toggleX}>
              <Xmark />
            </button>
          </GridRow>
          <a href="#home" className="active">Choose a Bookstore</a>
          <a href="#news"> Gift Cards</a>
          <a href="#contact">Special Offers</a>
          <a href="#about">New Books</a>
          <a>Refer A Friend</a>
          <a>Best Sellers</a>
          <a>Fiction</a>
          <a>Nonfiction</a>
          <a>YA</a>
          <a>Kids</a>
          <a>Games & Puzzles</a>
        </GridColumn>
      </GridRow>
    </GridSystem>
  );
}

export default Navbar;
