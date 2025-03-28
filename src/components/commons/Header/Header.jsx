import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="header">


            <nav className={`nav ${menuOpen ? "open" : ""}`}>

            <ul className="nav-links">
          <li>
            <Link to="/Home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/producto" onClick={() => setMenuOpen(false)}>
              Producto
            </Link>
          </li>
          <li>
            <Link to="/torneos" onClick={() => setMenuOpen(false)}>
              Torneos
            </Link>
          </li>
        </ul>
            </nav>



        </header >
    )
}

export default Header;