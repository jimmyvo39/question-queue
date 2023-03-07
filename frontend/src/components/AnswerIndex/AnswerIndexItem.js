import React from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import {deleteAnswer} from "../../store/answers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Vote from './Votes';


import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


const AnswerIndexItem = ({answer}) => {
  const {questionId} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let sessionDelete;
 

  const handle = (e)=> {
    e.preventDefault();
    dispatch(deleteAnswer(questionId,answer.id));
    history.push(`/questions/${questionId}`);
  }

  const edit = (e)=> {
    e.preventDefault();

    history.push(`/questions/${questionId}/answers/${answer.id}`);
  }


  if ( !sessionUser ) {
    sessionDelete = (
      <>
      <div></div>
      </>
    )
  } else if (sessionUser.id === answer.authorId) {
    sessionDelete = (
      <>
        <>
          <button onClick={handle} className='edit-delete'>DELETE</button>
        </>
        <>
          <button onClick={edit} className='edit-delete'>EDIT</button>
        </>
      </>
    );
  } else {
    sessionDelete = (
      <>
       <div></div>
      </>
    );
  }

  let voteSession;
  if (!sessionUser){
    voteSession = (
        <>
            <svg
            fill='grey'
            aria-hidden="true"
            className="svg-icon iconArrowUpLg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 25h32L18 9 2 25Z"></path>
          </svg>
          <h4 className='votes'>{answer.votesCount}</h4>
          <svg
            fill='grey'
            aria-hidden="true"
            className="svg-icon iconArrowDownLg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 11h32L18 27 2 11Z"></path>
          </svg>
        </>
        )

} else {
    voteSession = <Vote answer={answer} />
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
      <h3 className='question-asker'>
        <div className='asker'>
          <FontAwesomeIcon icon={faUser} style={userIcon} />
        </div>
        {answer.username}
        <h3 id='asked'> asked</h3>
        <ReactTimeAgo date={answer.createdAt} locale="en-US"/>
      </h3>
    )
  }




  return(
    <>
           <div className='question-preview'>
          <div className='stats'>
            {voteSession}
          </div>
          <li className='question-preview-text'>

              <h3 className="answer-body-preview">{answer.body}</h3>
              <div id='index-bottom'>
                {sessionDelete}
                <UserName/>
              </div>
          </li>
        </div>
    </>
  )
}

export default AnswerIndexItem