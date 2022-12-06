import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Navigation.css';
import { Input } from '../Forms';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      // <ProfileButton user={sessionUser} />
      <>
        <Logo/>
        <Link>About</Link>
        <SearchBar/>
        <Link>Github</Link>
        <Link>LinkedIn</Link>
        <LogoutButton />
    
      </>
    );
  } else {
    sessionLinks = (
      <>
        <DropDown/>
        <Logo/>
        <Link>About</Link>
        <Link>Github</Link>
        <Link>LinkedIn</Link>
        <SearchBar/>
        <LoginButton />
        <NavLink to="/signup" className="button">Sign Up</NavLink>
      </>
    );
  }

  function DropDown() {
    return (
      <h1>X</h1>
    )
  }

  function SearchBar() {
    return (
      <Input class="search" type="text" placeholder="Search soon..."></Input>

    )
  }

  function Logo() {
    return (
      <NavLink exact to="/" className="nav-title">
        <h1>Question Queue</h1>
      </NavLink>
    )
  }



  return (
    <header className="site-header">
      <div className="session-links">
        {sessionLinks}
      </div>
    </header>
  );
}

export default Navigation;
