import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";





function LogoutButton() {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

  return (
    <>
      <button onClick={logout} className="login-button">
        Log out
      </button>
    </>
  );
}

export default LogoutButton;