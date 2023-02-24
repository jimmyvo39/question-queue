import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './AnswerEditForm.css';

import AnswerEditForm from './AnswerEditForm'



function AnswerFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <>
      <AnswerEditForm/>
    </>
    ) : (
      <>
      <Redirect to="/login" />
    </>
    );

}


export default AnswerFormPage;
