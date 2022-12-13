import React from "react";
import * as questionActions from "../../store/questions";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";
import { useSelector } from 'react-redux';


function QuestionForm({ onSuccess }) {
  const sessionUser = useSelector(state => state.session.user);
  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  
  const author_id = sessionUser ? sessionUser.id : null

  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: questionActions.createQuestion({ title, body, author_id })
  });



  

  return (
    <form onSubmit={onSubmit}>
      <FormErrors errors={errors}/>
      <h2>title</h2>
      <Input 
        className="title-input"
        value={title}
        onChange={onTitleChange}
        required
      />
      <h2>body</h2>
      <Input 
        className="body-input"
        type="text"
        value={body}
        onChange={onBodyChange}
        required
      />
      <button type="submit"  className="signup-button">Ask</button>
    </form>
  );
}

export default QuestionForm;