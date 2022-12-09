import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../SessionForms";
import './LoginForm.css';
import logo from '../../asset/logo.png';
import DemoUser from "./DemoUser";
import { NavLink } from 'react-router-dom';



function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    
      <div className="page">
        <img className="logo" src={logo} alt="logo"></img>
        <DemoUser/>
        <div className="login-page">
          <LoginForm />
        </div>
        <div className="fine-text">
          <h4 >
            Don't have an account?
            <NavLink to="/signup" className="fine-link" > Sign up</NavLink>
          </h4>
          <h4>
            Are you an employer? 
            <a href="https://www.linkedin.com/in/jimmy-vo-02a5043b/" target="_blank" className="fine-link" rel="noreferrer"> Reach me here</a>
          </h4>
        </div>
      </div>
    
  );
}


export default SignupFormPage;
