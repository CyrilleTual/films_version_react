import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
                 <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Vous cherchez quelque chose?</NavLink>
                </li>
            </ul>
        </nav>
        </header>
   
    );
};

export default Navbar;