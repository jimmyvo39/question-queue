import React from "react";
import { useHistory } from 'react-router-dom';
import { useInput } from "../../hooks";
import { Input } from "../Forms";
import { useSelector, useDispatch} from 'react-redux';
import csrfFetch from "../../store/csrf";


function QuestionForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();

  const [title, onTitleChange] = useInput("");
  const [body, onBodyChange] = useInput("");
  
  const author_id = sessionUser ? sessionUser.id : null

  const createQuestion= (question) => async () => {
    const res = await csrfFetch(`/api/questions`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(question),
        method: "POST"
    });
    if (res.ok){
      history.push(`/questions`)
    }    
  }


  const onSubmit = (e) => {
    e.preventDefault();
    const data = {title, body, author_id}
    dispatch(createQuestion(data));
    // history.push('/questions')
  }



  const Prompt = () => {
    return(
      <>
        <div className="question-prompt">
          <h4>Writing a good question</h4>
          <h5>You're ready to ask a programming-related question and this form will help guide you through the process.</h5>
          <h5>Looking to ask a non-programming question? See the topics here to find a relevant site.</h5>
          <h6>Steps</h6>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
        <div className="title-prompt">
          <div id="title-prompt-header">
            <h5>Writing a good title</h5>
          </div>
          <div id="title-prompt-body">
            <svg aria-hidden="true" className="svg-spot spotPencil" width="48" height="48" viewBox="0 0 48 48"><path opacity=".2" d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"></path><path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path></svg> 
            <ul>
              <li>Your title should summarize the problem.</li>
              <li>You might find that you have a better idea of your title after writing out the rest of the question.</li>
            </ul>
          </div>
        </div>
      </>
    )
  }


  return (
    <>
    <div className="form-page">
      <h1 id="form-heading">Ask a public question</h1>
      <Prompt/>
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <h2>Title</h2>
          <h3>Be specific and imagine you're asking a question to another person.</h3>
          <Input 
            className="title-input"
            value={title}
            onChange={onTitleChange}
            required
            style={{width: "100%", resize: "vertical"}}
          />
        </div>
        <div className="form-container">
          <h2>What are the details of your problem?</h2>
          <h3>Introduce the problem and expand on what you put in the title</h3>
          <h3>Describe what you tried, what you expected to happen, and what actually resulted.</h3>
          <textarea 
            className="body-input"
            type="textarea"
            value={body}
            onChange={onBodyChange}
            required
            style={{width: "100%", height: "300px", resize: "vertical"}}
          />
        </div>
        <button type="submit"  className="signup-button">Ask</button>
    </form>
      
    </div>
    </>
    
  );
}

export default QuestionForm;