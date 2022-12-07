import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import './Navigation.css';
import { Input } from '../Forms';
import logo from './logo.png';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      {/* <ProfileButton user={sessionUser} /> */}
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
        <TextLinks/>
        <SearchBar/>
        <LoginAndSignup/>
      </>
    );
  }

  function LoginAndSignup(){
    return(
      <div className='login-signup'>
        <NavLink to="/login" className="login-button" id='login'>Log in</NavLink>
        <NavLink to="/signup" className="signup-button" id='signup'>Sign up</NavLink>
      </div>
  
    )
  }

  function TextLinks() {
    return(
    <div className='text-link'>
      <Link>About</Link>
      <a href="https://github.com/jimmyvo39/question-queue/wiki" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/jimmy-vo-02a5043b/" target="_blank">LinkedIn</a>
    </div>
    )
  }

  function Logo() {
    return (
      <NavLink exact to="/" className="nav-title">
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="question">question</h1>
        <h1 className="queue">queue</h1>
      </NavLink>
    )
  }

  function DropDown() {
    return (
      <h1>X</h1>
    )
  }

  function SearchBar() {
    return (
      <div className='search-container'>

        <Input className="search" type="text" placeholder="Search soon..."></Input>
      </div>

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
