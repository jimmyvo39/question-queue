import csrfFetch from "./csrf.js";

export const RECEIVE_VOTE = "votes/RECEIVE_VOTE";
export const REMOVE_VOTE = "votes/REMOVE_VOTE";

export const receiveVote = (vote) => ({ type: RECEIVE_VOTE, vote });
export const removeVote = (votableId) => ({ type: REMOVE_VOTE, votableId });

export const upvote = (vote) => async (dispatch) => {
  console.log(vote)
  const res = await csrfFetch(`/api/${vote.type}/${vote.id}/upvote`, {
    method: "POST",
  });
  const data = await res.json();
  dispatch(receiveVote(data));
};

export const downvote = (votableType, votableId) => async (dispatch) => {
  const res = await csrfFetch(`/api/${votableType}/${votableId}/downvote`, {
    method: "POST",
  });
  const data = await res.json();
  dispatch(receiveVote(data));
};

export const getVote = (state, votableId) => state.votes[votableId] || null;

const votesReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_VOTE:
      return {
        ...newState,
        [action.vote.votableId]: action.vote,
      };
    case REMOVE_VOTE:
      delete newState[action.votableId];
      return newState;
    default:
      return state;
  }
};

export default votesReducer;
