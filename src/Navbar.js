import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
   <> 
      <nav className="navbar">
         <ul className="nav-items">
            <li className="nav-item"><Link to={'/'}>Dashboard</Link></li>
            <li className="nav-item"><Link to={'/report'}>Reports</Link></li>
            <li className="nav-item"><Link to={'/advices'}>Advices</Link> </li>
        </ul>
      </nav>
   </>
  );
};


export default Navbar;
