import csrfFetch from "./csrf.js";

export const RECEIVE_ANSWERS = "answers/RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "answers/RECEIVE_ANSWER";
export const REMOVE_ANSWER = "answers/REMOVE_ANSWER";

export const receiveAnswers = (answers) => ({type: RECEIVE_ANSWERS, answers});
export const receiveAnswer = (answer) => ({type: RECEIVE_ANSWER, answer});
export const removeAnswer = (answerId) => ({type: REMOVE_ANSWER, answerId});


export const getAnswer = (answersId) => (state) => state.answers ? state.answers[answersId] : null;
export const getAnswers =  (state) => state.answers ? Object.values(state.answers) : [];


export const fetchAnswers= (questionId) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${questionId}/answers`);
    const data = await res.json();
    dispatch(receiveAnswers(data))
}

export const fetchAnswer= (questionId,answerId) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${questionId}/answers/${answerId}`);
    const data = await res.json();
    dispatch(receiveAnswer(data.answer))
}

export const createAnswer= (answer) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${answer.questionId}/answers`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(answer),
        method: "POST"
    });
    const data = await res.json();
    dispatch(receiveAnswer(data));
    
}

export const updateAnswer= (answer) => async (dispatch) => {
    const res = await csrfFetch(`/api/answers/${answer.id}`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(answer),
        method: "PATCH"
    });
    const data = await res.json();
    dispatch(receiveAnswer(data))
}

export const deleteAnswer= (questionId,answerId) => async (dispatch) => {
    await csrfFetch(`/api/questions/${questionId}/answers/${answerId}`,{
        method: "DELETE"
    });

    dispatch(removeAnswer(answerId))
}



const answersReducer = (state={},action)=>{
    const newState = {...state};

    switch(action.type){
        case RECEIVE_ANSWERS:
            // return {...newState,...action.answers};
            return {...action.answers};
        case RECEIVE_ANSWER:
            // newState[action.answer.id] = action.answer;
            // return newState;
            return{
                [action.answer.id]: action.answer
            }
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;
        default:
            return state
    }
}

export default answersReducer