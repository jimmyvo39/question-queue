import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../SessionForms";
import './LoginForm.css';



function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <div className="login-page">
      <h1>Log in</h1>
      <LoginForm />
    </div>
  );
}


export default SignupFormPage;
