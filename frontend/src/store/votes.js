import csrfFetch from "./csrf.js";

// Action Types
export const RECEIVE_VOTE = "votes/RECEIVE_VOTE";
export const REMOVE_VOTE = "votes/REMOVE_VOTE";

// Action Creators
export const receiveVote = (vote) => ({ type: RECEIVE_VOTE, vote });
export const removeVote = (votableId) => ({ type: REMOVE_VOTE, votableId });

// Thunk Actions
export const upvote = (vote) => async (dispatch) => {
  const res = await csrfFetch(`/api/${vote.type}/${vote.id}/upvote`, {
    method: "POST",
  });
  const data = await res.json();
  dispatch(receiveVote(data));
};

export const downvote = (vote) => async (dispatch) => {
  const res = await csrfFetch(`/api/${vote.type}/${vote.id}/downvote`, {
    method: "POST",
  });
  const data = await res.json();
  dispatch(receiveVote(data));
};

// Selectors
export const getVote = (votableId) => {
  return (state) => {
    console.log(state)
    if (state.votes && state.votes.votes && state.votes.votes[votableId]) {
      return state.votes.votes[votableId];
    }
    return null;
  };
};

// Reducer
const initialState = {
  votes: {},
};

const votesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_VOTE:
      const { value, votable_id, votable_type } = action.vote;
      return {
        ...state,
        votes: {
          ...state.votes,
          [votable_id]: {
            type: value > 0 ? 'upvote' : 'downvote',
            votableType: votable_type,
          },
        },
      };
    case REMOVE_VOTE:
      const { [action.votableId]: _, ...restVotes } = state.votes;
      return {
        ...state,
        votes: restVotes,
      };
    default:
      return state;
  }
};

export default votesReducer;
