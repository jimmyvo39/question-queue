import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, fetchQuestion } from '../../store/questions';
import {  getVote, removeVote, upvote, downvote } from '../../store/votes';

const QuestionVotes = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const question = useSelector(getQuestion(questionId));
  const vote = useSelector(getVote(questionId));

  const initialVoteStatus = vote ? vote : null ;

  const currentCount = question.votesCount;
  const [voteStatus, setVoteStatus] = useState(initialVoteStatus);
  const [voteCount, setVoteCount] = useState(currentCount);

  const upvoteColor = voteStatus === 'upvote' ? 'orange' : 'grey';
  const downvoteColor = voteStatus === 'downvote' ? 'orange' : 'grey';

  useEffect(() => {

    dispatch(fetchQuestion(questionId));
  }, [questionId,dispatch]);

  const handleUpvote = () => {
    // If user has already upvoted, remove the vote
    if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'upvote' }));
      setVoteStatus(null);
      setVoteCount(voteCount - 1);
    } else {
      dispatch(upvote({ id: questionId, type: 'questions' }));
      setVoteStatus('upvote');
      setVoteCount(voteCount + 1);
    }
  };

  const handleDownvote = () => {
    // If user has already downvoted, remove the vote
    if (voteStatus === 'downvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'downvote' }));
      setVoteStatus(null);
      setVoteCount(voteCount + 1);
    } else {
      dispatch(downvote({ id: questionId, type: 'questions' }));
      setVoteStatus('downvote');
      setVoteCount(voteCount - 1);
    }
  };

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

export default QuestionVotes;
