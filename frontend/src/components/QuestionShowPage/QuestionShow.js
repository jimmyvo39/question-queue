import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, fetchQuestion } from '../../store/questions';

const QuestionShow = () => {
    const dispatch = useDispatch();
    const {questionId} = useParams();
    
    const question = useSelector(getQuestion(questionId))

    useEffect(()=>{
        dispatch(fetchQuestion(questionId))
    },[questionId])

    return(
        <>
            <h1>{question.title}</h1>
            <h2>{question.body}</h2>
            <Link to="/">Questions</Link>
        </>
    )
}

export default QuestionShow