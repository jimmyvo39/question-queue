import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './QuestionFormPage.css';

import QuestionForm from './QuestionForm'



function QuestionFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <QuestionForm/>
    ) : (
      <>
      <Redirect to="/login" />
    </>
    );

  // return (
  //   <>
  //   <h1>test from new form</h1>
  //   <QuestionForm/>
  //   </>
  // )
}


export default QuestionFormPage;
