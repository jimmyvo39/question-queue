import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './QuestionEditForm.css';

import QuestionEditForm from './QuestionEditForm'



function QuestionFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <QuestionEditForm/>
    ) : (
      <>
      <Redirect to="/login" />
    </>
    );

}


export default QuestionFormPage;
