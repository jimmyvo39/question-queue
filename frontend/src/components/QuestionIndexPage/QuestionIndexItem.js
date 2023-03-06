import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import {deleteQuestion} from "../../store/questions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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


  if ( !sessionUser ) {
    sessionDelete = (
      <>
      <div></div>
      </>
    )
  } else if (sessionUser.id === question.authorId) {
    sessionDelete = (
      <>
        <button onClick={handle} id='delete-btn'>DELETE</button>
      </>
    );
  } else {
    sessionDelete = (
      <>
       <div></div>
      </>
    );
  }

  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColorBG = Math.floor(Math.random()*16777215).toString(16);

  const userIcon = {
    color: `#${randomColor}`, 
    background: `#${randomColorBG}`, 
    padding: '1.5px',
    borderRadius: '2px'
  }

  const UserName = () => {
    return(
      <div className='question-asker'>
        <div className='asker'>
          <FontAwesomeIcon icon={faUser} style={userIcon} />
        </div>
        {question.username}
        <h3 id='asked'> asked</h3>
        <ReactTimeAgo date={new Date(question.createdAt)} locale="en-US"/>
      </div>
    )
  }




  return(
    <>
           <div className='question-preview'>
          <div className='stats'>
            <h3>{question.votesCount} votes</h3>
            <h3>{question.answerCount} answers</h3>

          </div>
          <li className='question-preview-text'>
              <button onClick={() => history.push(`/questions/${question.id}`)} 
                className="question-link"> {question.title} </button>
              {/* <Link to={`questions/${question.id}`} className="question-link" >{question.title}</Link> */}
              <h3 className="question-body-preview">{question.body}</h3>
              <div id='index-bottom'>
                {sessionDelete}
                <UserName/>
              </div>
          </li>
        </div>
    </>
  )
}

export default QuestionIndexItem