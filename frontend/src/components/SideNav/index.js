import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SideNav.css';


function SideNav() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='sidebar'>
            <NavLink to="/" >Home</NavLink>
            <h3>PUBLIC</h3>
            <NavLink to="/questions" >Question</NavLink>
            <NavLink to="/users" >Users</NavLink>
        </div>   
      </>
    );
  } else {
    sessionLinks = (
      <>
      </>
    );
  }




  return (
    <div className="site-header">
      <div className="session-links">
        {sessionLinks}
      </div>
    </div>
  );
}

export default SideNav;
