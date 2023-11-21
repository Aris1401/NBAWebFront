import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Entete = () =>{
    return(
      <div className="entete">
         <ul>
            <NavLink to="/"> <li>video</li> </NavLink>
            <NavLink to="/"> <li>grille tv</li> </NavLink>
            <NavLink to="/"> <li>replays</li> </NavLink>
            <NavLink to="/"> <li>Bein connect</li> </NavLink>
         </ul>
      </div>
    );
};
export default Entete;

