import React, { useState } from "react";
import Logo from "../assets/Star-of-David.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";


function Navbar() {

const [openLinks, setOpenLinks] = useState(false)

const toggleNavbar = () => {
    setOpenLinks(!openLinks);
};
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "closed"}>
        <img src={Logo} alt="Mayen HVAC Logo" />
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/Services"> services </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> contact </Link>
          </div>
        </div>
        <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Services"> services </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> contact </Link>
        <button onClick={toggleNavbar} aria-label="Toggle navigation">
        <ReorderIcon />
        </button>
        </div>
    </div>
  )
}

export default Navbar;