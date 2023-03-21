import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="nav">
            <a href="/" className="logo">Site Logo</a>
            <ul>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/call">
                        <button className="call-button">
                            Request a call
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default NavBar;