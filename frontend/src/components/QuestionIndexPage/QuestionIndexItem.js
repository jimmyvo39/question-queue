import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteQuestion } from '../../store/questions';



const QuestionIndexItem = ({question}) => {
    const dispatch = useDispatch();



    return(
        <div className='question-preview'>
          <div className='stats'>
            <h3>votes</h3>
            <h3>answers</h3>
            <h3>views</h3>
          </div>
          <li>
              <Link to={`questions/${question.id}`} >{question.title}</Link>
              {/* <h1>{question.title}</h1> */}
              <h2>{question.body}</h2>
              <h2>{question.username}</h2>


          </li>
        </div>
        
    )
}

export default QuestionIndexItem