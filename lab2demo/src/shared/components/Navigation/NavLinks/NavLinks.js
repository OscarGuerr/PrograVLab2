import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css';

const NavLinks = (props) => {
    return(
        <ul className="nav-links">
            <li>
                <NavLink to ="/" exact> Ejercicio 2</NavLink>
            </li>
                
            <li>
                <NavLink to ="/places" exact> Ejercicio 3 </NavLink>
            </li>

            <li>
                <NavLink to ="/u1/places" exact>  Ejercicio 4</NavLink> 
            </li>

            
        </ul>
    );
}

export default NavLinks;