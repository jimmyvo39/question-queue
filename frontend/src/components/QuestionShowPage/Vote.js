import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVote, removeVote, upvote, downvote } from '../../store/votes';

const Vote = ({ question }) => {
  const dispatch = useDispatch();
  const questionId = question.id;

  const vote = useSelector(getVote(questionId));


  const [voteStatus, setVoteStatus] = useState(vote ? vote.type : null);
  const [voteCount, setVoteCount] = useState(question.votesCount);

  useEffect(() => {
  
    if (vote) {
      setVoteStatus(vote.type);
    } else {
      setVoteStatus(null);
    }
  }, [vote]);

  useEffect(() => {
    setVoteCount(question.votesCount);
  }, [question]);

  const upvoteColor = voteStatus === 'upvote' ? 'orange' : 'grey';
  const downvoteColor = voteStatus === 'downvote' ? 'orange' : 'grey';

  function handleUpvote() {
    if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'upvote' }));
      setVoteStatus(null);
      setVoteCount(voteCount - 1);
    } else if (voteStatus === 'downvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'downvote' }));
      dispatch(upvote({ id: questionId, type: 'questions' }));
      setVoteStatus('upvote');
      setVoteCount(voteCount + 2);
    } else {
      dispatch(upvote({ id: questionId, type: 'questions' }));
      setVoteStatus('upvote');
      setVoteCount(voteCount + 1);
    }
  }
  
  function handleDownvote() {
    if (voteStatus === 'downvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'downvote' }));
      setVoteStatus(null);
      setVoteCount(voteCount + 1);
    } else if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'upvote' }));
      dispatch(downvote({ id: questionId, type: 'questions' }));
      setVoteStatus('downvote');
      setVoteCount(voteCount - 2);
    } else {
      dispatch(downvote({ id: questionId, type: 'questions' }));
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
      <h4>{voteCount}</h4>
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
