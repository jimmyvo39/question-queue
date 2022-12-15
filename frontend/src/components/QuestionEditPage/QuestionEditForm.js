import React, {useState, useEffect} from "react";
import * as questionActions from "../../store/questions";
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
  },[])

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
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {title, body, author_id, id}
    dispatch(updateQuestion(data));
  }



  return (
    <form onSubmit={onSubmit}>
            <label>
                title
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </label>
            <label>
                body
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)}></input>
            </label>
            <button>edit</button>
    </form>
  );
}

export default QuestionEditForm;