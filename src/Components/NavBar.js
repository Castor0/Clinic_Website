import React from "react";


const NavBar = () => {
    return (
        <nav className="nav">
            <a href="/" className="logo">Site Logo</a>
            <ul>
                <li>
                    <a href="/pricing">Contact</a>
                </li>
                <li>
                    <a href="/pricing">About</a>
                </li>
                <li>
                    <a href="/pricing">Services</a>
                </li>
                <li>
                    <a href="/pricing">
                        <button className="call-button">
                            Request a call
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
        
    );
}

export default NavBar;