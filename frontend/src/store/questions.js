import csrfFetch from "./csrf.js";

export const RECEIVE_QUESTIONS = "questions/RECEIVE_QUESTIONS";

export const RECEIVE_QUESTION = "questions/RECEIVE_QUESTION";
export const REMOVE_QUESTION = "questions/REMOVE_QUESTION";
export const SEARCH_QUESTIONS = "questions/SEARCH_QUESTIONS";


export const receiveQuestions = (questions) => ({type: RECEIVE_QUESTIONS, questions});
export const receiveQuestion = (question) => ({type: RECEIVE_QUESTION, question});
export const removeQuestion = (questionId) => ({type: REMOVE_QUESTION, questionId});



export const getQuestion = (questionId) => (state) => state.questions ? state.questions[questionId] : null;
export const getQuestions =  (state) => state.questions ? Object.values(state.questions) : [];



export const fetchQuestions= () => async (dispatch) => {
    const res = await csrfFetch(`/api/questions`);
    const data = await res.json();
    dispatch(receiveQuestions(data))
}

export const fetchQuestion= (questionId) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${questionId}`);
    const data = await res.json();
    // debugger
    dispatch(receiveQuestion(data.question))
}


export const searchQuestions = (query) => async (dispatch) => {

    const res = await csrfFetch(`/api/questions/search?query=${query}`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: SEARCH_QUESTIONS, questions: data });
};


export const createQuestion= (question) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(question),
        method: "POST"
    });
    const data = await res.json();
    dispatch(receiveQuestion(data));
    
}

export const updateQuestion= (question) => async (dispatch) => {
    const res = await csrfFetch(`/api/questions/${question.id}`,{
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(question),
        method: "PATCH"
    });
    const data = await res.json();
    dispatch(receiveQuestion(data))
}

export const deleteQuestion= (questionId) => async (dispatch) => {
    await csrfFetch(`/api/questions/${questionId}`,{
        method: "DELETE"
    });

    dispatch(removeQuestion(questionId))
}



const questionsReducer = (state={},action)=>{
    const newState = {...state};

    switch(action.type){

        case RECEIVE_QUESTIONS:
            return {...newState,...action.questions};
        case RECEIVE_QUESTION:
            return{
                [action.question.id]: action.question
            }
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        case SEARCH_QUESTIONS:
            return {...action.questions};
        default:
            return state

    }
}

export default questionsReducer