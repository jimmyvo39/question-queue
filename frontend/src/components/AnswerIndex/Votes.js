import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVote, upvote, downvote } from '../../store/votes';
import './AnswerIndex.css';
const Vote = ({ answer }) => {
    const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const answerId = answer.id;

  
  const getVote = (answerId, userId) => {
      return (state) => {
          const votes = state.answers[answerId]?.votes || [];
          const vote = votes.find((vote) => vote.user_id === userId);
          return vote ? vote : null;
        };
    };

    

    const vote = useSelector(getVote(answerId,sessionUser.id));


    const currentStatus = (vote) => {
        return vote ? (vote.value === 1 ? 'upvote' : 'downvote') : null;
    };
    const [voteStatus, setVoteStatus] = useState(currentStatus(vote));

  const [voteCount, setVoteCount] = useState(answer.votesCount);

  useEffect(() => {
    setVoteStatus(currentStatus(vote));
  }, [vote]);

  useEffect(() => {
    setVoteCount(answer.votesCount);
  }, [answer]);

  const upvoteColor = voteStatus === 'upvote' ? 'orange' : 'grey';
  const downvoteColor = voteStatus === 'downvote' ? 'orange' : 'grey';
  

  function handleUpvote() {
    if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: answerId, type: 'answers', voteType: 'upvote' }));
      dispatch(upvote({ id: answerId, type: 'answers' }));
      setVoteStatus(null);
      setVoteCount(voteCount - 1);
    } else if (voteStatus === 'downvote') {
      dispatch(removeVote({ id: answerId, type: 'answers', voteType: 'downvote' }));
      dispatch(upvote({ id: answerId, type: 'answers' }));
      setVoteStatus('upvote');
      setVoteCount(voteCount + 2);
    } else {
      dispatch(upvote({ id: answerId, type: 'answers' }));
      setVoteStatus('upvote');
      setVoteCount(voteCount + 1);
    }
  }
  
  function handleDownvote() {
    if (voteStatus === 'downvote') {
      dispatch(removeVote({ id: answerId, type: 'answers', voteType: 'downvote' }));
      dispatch(downvote({ id: answerId, type: 'answers' }));
      setVoteStatus(null);
      setVoteCount(voteCount + 1);
    } else if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: answerId, type: 'answers', voteType: 'upvote' }));
      dispatch(downvote({ id: answerId, type: 'answers' }));
      setVoteStatus('downvote');
      setVoteCount(voteCount - 2);
    } else {
      dispatch(downvote({ id: answerId, type: 'answers' }));
      setVoteStatus('downvote');
      setVoteCount(voteCount - 1);
    }
  }
  
  

  return (
    <>
      <svg
        fill={upvoteColor}
        onClick={handleUpvote}
        aria-hidden="true"
        className="svg-icon iconArrowUpLg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 25h32L18 9 2 25Z"></path>
      </svg>
      <h4 className='votes'>{voteCount}</h4>
      <svg
        fill={downvoteColor}
        onClick={handleDownvote}
        aria-hidden="true"
        className="svg-icon iconArrowDownLg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 11h32L18 27 2 11Z"></path>
      </svg>
    </>
  );
};

export default Vote;