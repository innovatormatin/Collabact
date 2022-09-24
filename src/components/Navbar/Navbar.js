import React from "react";
import "./navbar.css";
import logo from "../../assets/img/logo/logo.png";
import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [offer, setOffer] = useState(false);
  const [mobmenu, setMobmenu] = useState(false);
  const activeItem = {
    color: "black",
    borderBottom: "solid 2px black",
  };
  const mobmenuHandler = () => {
    mobmenu ? setMobmenu(false) : setMobmenu(true);
  };
  useEffect(() => {
    if (
      location.pathname === "/ouroffer/businessesoffer" ||
      location.pathname === "/ouroffer/salespartneroffer"
    ) {
      setOffer(true);
    } else {
      setOffer(false);
    }
  }, [location]);
  return (
    <nav className="navbar">
      <i id="menuButton">
        <FiMenu onClick={() => mobmenuHandler()}/>
        <ul id="mobileMenu" style={{ display: mobmenu ? "block" : "none" }}>
          <span></span>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="ouroffer/businessesoffer">
            <li>Businesses</li>
          </Link>
          <Link to="ouroffer/salespartneroffer">
            <li>Sales Partner</li>
          </Link>
          <Link to="about">
            <li>About Us</li>
          </Link>
          <Link to="faq">
            <li>FAQ</li>
          </Link>
          <Link to="blog">
            <li>Blog</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </i>
      <ul className="navItems">
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeItem : undefined)}
        >
          <li className="ondesktop">Home</li>
        </NavLink>
        <li
          id="ourOfferMenu"
          className="ondesktop"
          style={offer ? { ...activeItem } : {}}
        >
          Our Offers
          <div className="offerList">
            <span></span> {/* Do not remove this span */}
            <p>
              <NavLink to="ouroffer/businessesoffer">Businesses</NavLink>
            </p>
            <p>
              <NavLink to="ouroffer/salespartneroffer">Sales Partner</NavLink>
            </p>
          </div>
        </li>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeItem : undefined)}
        >
          <li className="ondesktop">About Us</li>
        </NavLink>
        <li>
          <img id="navLogo" src={logo} alt="collabact" />
        </li>
        <NavLink
          to="faq"
          style={({ isActive }) => (isActive ? activeItem : undefined)}
        >
          <li className="ondesktop">FAQ</li>
        </NavLink>
        <NavLink
          to="blog"
          style={({ isActive }) => (isActive ? activeItem : undefined)}
        >
          <li className="ondesktop">Blog</li>
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? activeItem : undefined)}
        >
          <li className="ondesktop">Contact</li>
        </NavLink>
      </ul>
      <ul className="logInOut">
        <button>Log In</button>
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
