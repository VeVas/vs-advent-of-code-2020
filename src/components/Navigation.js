import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
          <NavLink to="/First">1st</NavLink>&nbsp;&nbsp;
          <NavLink to="/Second">2nd</NavLink>&nbsp;&nbsp;
       </div>
    );
}
 
export default Navigation;