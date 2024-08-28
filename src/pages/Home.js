import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/Star-of-David.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="headerContainer" 
      style={{ backgroundImage: `url(${BannerImage})`}}
      >
        <h1> Mayen's HVAC repair</h1>
        <p> here to help with all HVAC and Appliance repairs</p>
        <Link to="/contact"> 
        <button>Call Now!!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;