import React from 'react';
import { NavLink} from 'react-router-dom';
import './SideNav.css';


function SideNav() {

  return (
    <div className='sidebar'>
      <NavLink to="/" >Home</NavLink>
      <h3>PUBLIC</h3>
      <NavLink to="/questions" >Question</NavLink>
      <NavLink to="/users" >Users</NavLink>
    </div> 
  );
}

export default SideNav;
