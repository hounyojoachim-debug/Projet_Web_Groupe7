import React from 'react';
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return( <div className="navbar">
    <div className="laptop">
        <h2 className = "Logo">
            School Presence
        </h2>
        <div className="navigation">
            <ul className="links-conteneur">    
                <li className="link">Consultation </li>
                <li className="link">Programmes </li>
                <li className="link"> Notifications</li>
                <li className="link"> Demandes</li>
                <li className="link">Presence </li>
            </ul>
            {/* <FiMenu className="menu-icons"/> */}
        </div>    
  </div>  
    </div>
  );
};

export default Navbar