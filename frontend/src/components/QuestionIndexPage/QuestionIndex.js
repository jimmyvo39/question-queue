import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import QuestionIndexItem from './QuestionIndexItem';
import { getQuestions, fetchQuestions } from '../../store/questions';



const QuestionIndex = () => {
    const dispatch = useDispatch();
    const questions = useSelector(getQuestions);

    useEffect(()=>{
        dispatch(fetchQuestions())
    },[])
    // debugger
    const QuestionIndexItems = questions.map(question =>{
        return <QuestionIndexItem question={question} key={question.id}/>
    })

 
    if(!questions){
      return null
    }
    const returnNum = questions.length === 0 ? "0 Questions match your query" : `${questions.length} questions`

    
    return(
        <>
          <div>
            <div className="index-head">
              <h1>All Questions</h1>
              <NavLink to={`new`} className="ask-button">Ask Question</NavLink>
            </div>
            <div className="index-head">
              <h3>
              {/* {questions.length} questions */}
              {returnNum}
              </h3>
            </div>
          </div>
          <ul className="index-list">{QuestionIndexItems.reverse()}</ul>
        </>
    )
}

export default QuestionIndex