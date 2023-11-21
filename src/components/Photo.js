import React from 'react';
import { NavLink } from "react-router-dom";
import logoImage from '../pages/ok.png'; 
import "../styles/photo.css";

const Photo = () => {
   return (
      <div className="logo">
         <img src={logoImage} alt='Logo' />
      </div>
   );
};

export default Photo;
