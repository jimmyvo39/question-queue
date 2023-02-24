import React, { useState } from "react";
import { useHistory,useParams } from 'react-router-dom';
import { useInput} from "../../hooks";
import { useSelector, useDispatch} from 'react-redux';
import csrfFetch from "../../store/csrf";


function AnswerForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();
  const {questionId} = useParams();

  const [answerBody, setAnswerBody] = useInput("");
  const authorId = sessionUser ? sessionUser.id : null

  const createAnswer= ({questionId, authorId}) => async () => {
    const res = await csrfFetch(`/api/questions/${questionId}/answers/`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ body: answerBody, author_id: authorId, question_id: questionId }),
        method: "POST"
    });
    if (res.ok){
      history.push(`/questions/${questionId}`)
    }    
  }


  const onSubmit = (e) => {
    e.preventDefault();
    const data = {questionId, answerBody, authorId}
    dispatch(createAnswer(data));
    // setAnswerBody('');
  }






  return (
    <>
    <div className="form-page">
      <h1 >answer question</h1>

      <form onSubmit={onSubmit}>

        <div className="form-container">
          <textarea 
            className="body-input"
            type="textarea"
            value={answerBody}
            onChange={setAnswerBody}
            required
            style={{width: "100%", height: "300px", resize: "vertical"}}
          />
        </div>
        <button type="submit"  className="signup-button">answer</button>
    </form>
      
    </div>
    </>
    
  );
}

export default AnswerForm;