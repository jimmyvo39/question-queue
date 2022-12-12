import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionIndexItem from './QuestionIndexItem';
import { getQuestions, fetchQuestions } from '../../store/questions';



const QuestionIndex = () => {
    const dispatch = useDispatch();
    const questions = useSelector(getQuestions);

    useEffect(()=>{
        dispatch(fetchQuestions())
    },[])

    const QuestionIndexItems = questions.map(question =>{
        return <QuestionIndexItem question={question} key={question.id}/>
    })
    
    return(
        <>
          <div>
            <div className="index-head">
              <h1>All Questions</h1>
              <Link to={`Questions/new`} className="ask-button">Ask Question</Link>
            </div>
            <div className="index-head">
              <h3>
              {questions.length} questions
              </h3>
            </div>
          </div>
          <ul>{QuestionIndexItems}</ul>
        </>
    )
}

export default QuestionIndex