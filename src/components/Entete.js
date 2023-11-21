// Entete.jsx

import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/entete.css";

const Entete = () => {
    return (
        <div className="entete">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/videos">Vidéos</NavLink></li>
                <li><NavLink to="/grille-tv">Grille TV</NavLink></li>
                <li><NavLink to="/replays">Replays</NavLink></li>
                <li><NavLink to="/bein-connect">Bein Connect</NavLink></li>
                {/* Ajoutez d'autres titres ici */}
            </ul>
        </div>
    );
};
export default Entete;
