import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/air-conditioner-3629396_640.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="headerContainer" 
     
      >
        <h1> Here to help with all HVAC and Appliance repairs </h1>
       <p> Please Call!! </p>
</div>

<div 
className="headerContainer2">

       <h2> What we offer! </h2>
       
       <ul>
          <li>Air Conditioning Repair</li>
          <li>Central A/C Repair</li>
          <li>HVAC Repair</li>
          <li>A/C Service</li>
          <li>Heating & Cooling Repair</li>
          <li>High Customer Satisfaction</li>
          <li>Residential & Commercial Service</li> 
          <li>Professional Service</li>
          <li>appliance repair</li>
          </ul>
        
        <div className="imageContainer">
        <img src={image} alt="Air Conditioning Repair" />
        </div>
        <Link to="/contact"> 
        <button>Call Now!!</button>
        </Link>
        </div>
        </div>
      
    
  );
}

export default Home;