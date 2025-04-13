import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
  return (
   
    <nav className={styles.navlinks}>
       <img src="" className={styles.logopage}></img>
    
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Offer">Offers</Link>
        <Link to="/Faq">FAQ</Link>
        
       
    </nav>
  );
}

export default Navbar;
