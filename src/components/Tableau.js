import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/style.css";

const Tableau = () =>{
    return(
      <div className="entete">
        <table border="1" width="1500px">
          <th >CLASSEMENT</th>
          <th>MJ</th>
          <th>PPM</th>
          <th>PDPM</th>
          <th>MPM</th>
          <th>EFF</th>
          <th>FG%</th>
          <th>3P%</th>
          <th>%LF</th>

          <tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
     
          </tr>
        </table>
      </div>
    );
};
export default Tableau;

