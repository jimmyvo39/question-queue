import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'





function DemoUser() {
  
  const dispatch = useDispatch();

  const login = (e) => {
      e.preventDefault();
      dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}));
  };

  return (
    <>
      <button onClick={login} className="demo-button">
      <FontAwesomeIcon icon={faUserNinja} />
      <h3>Log in with Demo User</h3>
      </button>
    </>
  );
}

export default DemoUser;