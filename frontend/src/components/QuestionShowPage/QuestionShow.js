import { useEffect } from 'react';
import { NavLink, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, fetchQuestion, deleteQuestion } from '../../store/questions';

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

    // if (sessionUser.id === question.authorId) {
    //     sessionMod = (
    //     <>
    //         <button onClick={handle}>delete</button>
    //         <NavLink to={`/questions/${questionId}/edit`}>edit</NavLink>
    //     </>
    //     );
    // } else {
    //     sessionMod = (
    //     <>
    //     </>
    //     );
    // }

        if (!sessionUser) {
        sessionMod = (
        <>
        </>
        );
    } else if (sessionUser.id === question.authorId) {
        sessionMod = (
            <>
            <button onClick={handle}>delete</button>
            <NavLink to={`/questions/${questionId}/edit`}>edit</NavLink>
        </>
        );
    }

    return(
        <>
            <h1>{question.title}</h1>
            <h2>{question.body}</h2>
            {/* <NavLink to={`/questions/${questionId}/edit`}>edit</NavLink> */}
            {sessionMod}
        </>
    )
}

export default QuestionShow