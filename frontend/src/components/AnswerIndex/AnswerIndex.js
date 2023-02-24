import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams} from 'react-router-dom';
import AnswerIndexItem from './AnswerIndexItem';
import { getAnswers, fetchAnswers } from '../../store/answers';



const AnswerIndex = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();

    const answers = useSelector(getAnswers);
        
    useEffect(()=>{
      dispatch(fetchAnswers(questionId))
    },[questionId])
    
    const AnswerIndexItems = answers.map(answer =>{
        return <AnswerIndexItem answer={answer} key={answer.id}/>
    })
    
    return(
        <>
          <div>
            <div className="index-head">
              <h1>Answers</h1>
            </div>
            <div className="index-head">
              <h3>
              {answers.length} answers
              </h3>
            </div>
          </div>
          <ul className="index-list">{AnswerIndexItems}</ul>
        </>
    )
}

export default AnswerIndex