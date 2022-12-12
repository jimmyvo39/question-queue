import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({question}) => {




    return(
        <div className='question-preview'>
          <div className='stats'>
            <h3>votes</h3>
            <h3>answers</h3>
            <h3>views</h3>
          </div>
          <li>
              <Link to={`questions/${question.id}`} className="question-link" >{question.title}</Link>
              <h3 className="question-body-preview">{question.body}</h3>
              <h3>{question.author_id} asked {question.created_at}</h3>


          </li>
        </div>
        
    )
}

export default QuestionIndexItem