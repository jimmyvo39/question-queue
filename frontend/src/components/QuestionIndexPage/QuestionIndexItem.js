import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import {deleteQuestion} from "../../store/questions";

import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const QuestionIndexItem = ({question}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let sessionDelete;
 

  const handle = (e)=> {
    e.preventDefault()
    dispatch(deleteQuestion(question.id))
    history.push(`/questions`)
  }


  if (sessionUser.id === question.authorId) {
    sessionDelete = (
      <>
        <button onClick={handle}>delete</button>
      </>
    );
  } else {
    sessionDelete = (
      <>
      </>
    );
  }

  const UserName = () => {
    return(
      <h3 className='question-asker'>
        <div className='asker'>
          {question.username}
        </div>
        <h3 id='asked'> asked</h3>
        <ReactTimeAgo date={question.createdAt} locale="en-US"/>
      </h3>
    )
  }




  return(
    <>
           <div className='question-preview'>
          <div className='stats'>
            <h3>votes</h3>
            <h3>answers</h3>
            <h3>views</h3>
          </div>
          <li className='question-preview-text'>
              <button onClick={() => history.push(`/questions/${question.id}`)} 
                      className="question-link"> {question.title} </button>
                      
              {/* <Link to={`questions/${question.id}`} className="question-link" >{question.title}</Link> */}
              <h3 className="question-body-preview">{question.body}</h3>
              <UserName/>
              {sessionDelete}
          </li>
        </div>
    </>
  )
}

export default QuestionIndexItem