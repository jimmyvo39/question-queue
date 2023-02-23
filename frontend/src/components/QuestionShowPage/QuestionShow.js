import { useEffect } from 'react';
import { NavLink, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, fetchQuestion, deleteQuestion } from '../../store/questions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AnswerIndex from '../AnswerIndex/AnswerIndex.js'

import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)



const QuestionShow = () => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const {questionId} = useParams();
    
    const question = useSelector(getQuestion(questionId))

    useEffect(()=>{
        dispatch(fetchQuestion(questionId))
    },[questionId])

    if (!question){
        return null
    }

    let sessionMod;


    const handle = (e)=> {
        e.preventDefault()
        dispatch(deleteQuestion(question.id))
        history.push(`/questions`)
    }



        if (!sessionUser) {
        sessionMod = (
        <>
        </>
        );
    } else if (sessionUser.id === question.authorId) {
        sessionMod = (
            <>
                <div >
                    <NavLink to={`/questions/${questionId}/edit`} className='edit-delete'>Edit</NavLink>
                    <button onClick={handle} className='edit-delete'>Delete</button>
                </div>
            </>
        );
    }

    const TimeStamp = () => {
        return(
            <>
            <div className='time-stamps'>
                <h3 id='asked'> Asked</h3>
                <ReactTimeAgo date={question.createdAt} locale="en-US"/>
                <h3 id='modified'> Modified</h3>
                <ReactTimeAgo date={question.updatedAt} locale="en-US"/>
            </div>
            </>
        )
    }

    const Vote = () => {
        return (
            <>
                <svg aria-hidden="true" class="svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
                <h4>0</h4>
                <svg aria-hidden="true" class="svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>
            </>
        )
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColorBG = Math.floor(Math.random()*16777215).toString(16);

    const userIcon = {
        margin: '5px',
        color: `#${randomColor}`, 
        background: `#${randomColorBG}`, 
        padding: '7px',
        borderRadius: '2px'
      }


    const QuestionBottom = () => {
        return(
            <div id='question-bottom-container'>
                <div>
                    {sessionMod}
                </div>
                <div id='question-asker-container'>
                    <h3 id='asked'> 
                        asked <ReactTimeAgo date={question.createdAt} locale="en-US"/>
                    </h3>
                    <h3 id="asker" >
                        <FontAwesomeIcon icon={faUser} style={userIcon} size="xl"/>
                        {question.username}
                    </h3>
                </div>
            </div>
        )
    }

    const QuestionBody = () => {
        return(
        <> 
            <div id='question-body'>
                <div className='vote-body'>
                    <Vote  />
                </div>
                <div>
                    <h2>{question.body}</h2>
                </div>
            </div>
            <QuestionBottom/>
            <AnswerIndex/>

        </>
        )
    }


    return(
        <>
        <div className='show-page'>
            <div className='show-top'>
                <h1>{question.title}</h1>
                <NavLink to={`/new`} className="ask-button">Ask Question</NavLink>
            </div>
            <TimeStamp/>
            <QuestionBody/>
        </div>
        </>
    )
}

export default QuestionShow