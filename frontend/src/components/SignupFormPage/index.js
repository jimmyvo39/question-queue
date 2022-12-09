import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupForm } from "../SessionForms";
import './SignupForm.css';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const login = (e) => {
      e.preventDefault();
      dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}));
  };

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <div className="page">
        <button onClick={login} className="demo-button">
        <FontAwesomeIcon icon={faUser} />
        <h3>Log in with Demo User</h3>
        </button>
      <div className="signup-page">


        <SignupForm />
      </div>

      <div className="fine-text">
          <h4 >
            Already have an account?
            <NavLink to="/login" className="fine-link" > Log in</NavLink>
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
