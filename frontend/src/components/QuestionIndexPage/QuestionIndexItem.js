import React from 'react';
import { Link } from 'react-router-dom';



const QuestionIndexItem = ({question}) => {


  const UserName = () => {
    return(
      <h3 className='question-asker'>
        <div className='asker'>
          {question.username}
        </div> 
        asked {question.createdAt}
      </h3>
    )
  }

  return(
      <div className='question-preview'>
        <div className='stats'>
          <h3>votes</h3>
          <h3>answers</h3>
          <h3>views</h3>
        </div>
        <li className='question-preview-text'>
            <Link to={`questions/${question.id}`} className="question-link" >{question.title}</Link>
            <h3 className="question-body-preview">{question.body}</h3>
            <UserName/>
        </li>
      </div>
      
  )
}

export default QuestionIndexItem