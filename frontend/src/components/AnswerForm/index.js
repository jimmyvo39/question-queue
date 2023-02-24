import React from "react";
import { useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import './AnswerForm';

import AnswerForm from './AnswerForm'



function AnswerFormBox() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <AnswerForm/>
    ) : (
      <>
      {/* <Redirect to="/login" /> */}
      <NavLink to="/login" className="fine-link" > Login to answer</NavLink>
    </>
    );

}


export default AnswerFormBox;
