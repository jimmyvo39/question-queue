import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../SessionForms";
import './LoginForm.css';
import logo from '../../asset/logo.png';
import DemoUser from "./DemoUser";



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
      </div>
    
  );
}


export default SignupFormPage;
