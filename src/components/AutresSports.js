import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/autresSports.css";

const AutresSports = () =>{
    return(
      <div className="autres">
         <ul>
            <NavLink to="/"> <li>Foot</li> </NavLink>
            <NavLink to="/"> <li>NBA tv</li> </NavLink>
            <NavLink to="/"> <li>Tennis</li> </NavLink>
            <NavLink to="/"> <li>Rugby</li> </NavLink>
         </ul>
      </div>
    );
};
export default AutresSports;

