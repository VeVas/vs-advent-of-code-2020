import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
          <NavLink to="/First">1.</NavLink>&nbsp;&nbsp;
          <NavLink to="/Second">2.</NavLink>&nbsp;&nbsp;
       </div>
    );
}
 
export default Navigation;