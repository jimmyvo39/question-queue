import React, {useState, useEffect} from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getQuestion, fetchQuestion} from '../../store/questions';
import csrfFetch from "../../store/csrf";


function QuestionEditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const {questionId} = useParams();
  const question =  useSelector(getQuestion(questionId));
  
  const [title, setTitle] = useState(question ? question.title : "");
  const [body, setBody] = useState(question ? question.body : "");
  // const [title , setTitle] = useState(question.title);
  // const [body , setBody] = useState(question.body);
  // cant refresh without losing auto fill

  useEffect(()=>{
    dispatch(fetchQuestion(questionId))
  },[dispatch,questionId])

  const author_id = sessionUser ? sessionUser.id : null
  const id = questionId

 if (!question){
  return null
} else {
  // setTitle(question.title);
  // setBody(question.body)
}

  const updateQuestion= (question) => async () => {
  const res = await csrfFetch(`/api/questions/${question.id}`,{
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(question),
      method: "PATCH"
  });
  if (res.ok){
    history.push(`/questions/${questionId}`)
  }
  // const data = await res.json();
  // dispatch(receiveQuestion(data))
}

const Prompt = () => {
  return(
    <>
      <div className="edit-prompt">
          <div id="edit-prompt-header">
            <h5>How to Edit</h5>
          </div>
          <div id="edit-prompt-body">
            <ul>
              <li>Correct minor typos or mistakes</li>
              <li>Clarify meaning without changing it</li>
              <li>Add related resources or links</li>
              <li>Always respect the author's intent</li>
              <li>Don't use edits to reply to the author</li>
            </ul>
          </div>
        </div>
    </>
  )
}
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {title, body, author_id, id}
    dispatch(updateQuestion(data));
  }

  return (
    <div className="edit-page">
      <div id="edit-page-top">
          <div>
            <svg aria-hidden="true" className="svg-spot spotPencil" width="100" height="100" viewBox="0 0 48 48"><path opacity=".2" d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"></path><path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path></svg> 
            <h1 id="form-heading"> Edit your question </h1>
          </div>
        <Prompt/>
      </div>
      
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <h2>Title</h2>
          <textarea 
            type="text" 
            className="title-input"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            style={{width: "100%", height: "30px", resize: "vertical"}}
          />
        </div>
        <div className="form-container">
          <h2>Body</h2>
          <textarea 
            className="body-input"
            type="textarea" 
            value={body} 
            onChange={(e) => setBody(e.target.value)}
            required
            style={{width: "100%", height: "300px", resize: "vertical"}}
          />
        </div >
          <button className="signup-button">Save edits</button>
      </form>
    </div>
  );
}

export default QuestionEditForm;