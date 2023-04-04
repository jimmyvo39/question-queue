![This is an image](/asset/logo.png)
# Question queue


[Question queue](https://question-queue.onrender.com/) is a clone project of [stack overflow](https://stackoverflow.com/),  the question and answer website for programmers.

## Functionality & MVPs

In Question queue users are currently able to:
 - to signup and login with their registered credentials
 - read question and answers as users
 - post questions/answers as registerd users
 - update questions/answers as registerd users
 - delete questions/answers as registerd users
 - vote on questions/answers as registerd users
 

## Wireframes
![This is an image](/asset/homepage.png)
### homepage/question index page
- depending on the session-login status, the nav bar will allow users to sign-up/login or logout
- the side nav allow users to go to different pages on the site
- the body of the page will fetch all the questions currently on in the database
- the ask button leads to the question form page

### question show page
![This is an image](/asset/showpage.png)
- side nav style changes, highlighting the page the user is currently on
- edit button will go to the edit form page with inputs prefilled with the existing information
- delete button deletes the question and redirects the user to the index page

## Technologies, Libraries, APIs
This project will be implemented with the following technologies:

- PostgreSQL
- Ruby
- Ruby on Rails
- Javascript
- React
- Redux
- Render

## Highlighting code snippets
### Render logic based on login status
using react-redux's useSelector hook, i check the current state for an existing login. The navbar is rendered with particular componenets depending on the status. 
 ```javascript
const sessionUser = useSelector(state => state.session.user);

let sessionLinks;

if (sessionUser) {
    sessionLinks = (
        <>
        <Logo/>
        <About/>
        <SearchBar/>
        <SvgLinks/>
        <LogoutButton />
        </>
    );
    } else {
    sessionLinks = (
        <>
        <Logo/>
        <TextLinks/>
        <SearchBar/>
        <LoginAndSignup/>
        </>
    );
}
```

### Render logic based on login status and User ID

While any question can be read. logged in users can only edit, update, and delete their own questions. With this logic i render an empty div in place of a delete button if the the question does not belong to the user or their is no one logged in.

 ```javascript
   if ( !sessionUser ) {
    sessionDelete = (
      <>
      <div></div>
      </>
    )
  } else if (sessionUser.id === question.authorId) {
    sessionDelete = (
      <>
        <button onClick={handle} id='delete-btn'>DELETE</button>
      </>
    );
  } else {
    sessionDelete = (
      <>
       <div></div>
      </>
    );
  }

```
### Neutral Vote logic

To keep track of votes for both questions and answers, I have implemented a polymorphic table. The backend logic manages "neutralized" votes by deleting existing votes saving space on my limited database.

```ruby
class Api::VotesController < ApplicationController
  before_action :require_logged_in

  def upvote
    vote(1)
  end

  def downvote
    vote(-1)
  end

  private

  def vote(value)
    @votable = find_votable
    @vote = @votable.votes.find_or_initialize_by(user_id: current_user.id)

    if @vote.value == value
      @vote.destroy
    else
      @vote.value = value
      @vote.save
    end

    render json: { votable_type: @votable.class.name, votable_id: @votable.id, value: @vote.value }
  end

  def find_votable
    if params[:answer_id]
      Answer.find(params[:answer_id])
    else
      Question.find(params[:question_id])
    end
  end
end
```
The voting component's logic on the frontend manages "neutralized" votes by utilizing React's useState to update the voteCount, and also considers cases where a user changes their vote direction. In addition to tracking the current vote, the VoteStatus component also renders the upvoteColor for the upvote arrow.

 ```javascript
  const upvoteColor = voteStatus === 'upvote' ? 'orange' : 'grey';
  
  function handleUpvote() {
    if (voteStatus === 'upvote') {
      dispatch(removeVote({ id: questionId, type: 'questions', voteType: 'upvote' }));
      dispatch(upvote({ id: questionId, type: 'questions' }));
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
```

## Anticipated updates include:
- user index page/profile


### Acknowledgement
[Meyer Web](https://meyerweb.com/eric/tools/css/reset/) - providing CSS Reset

[Stack Overflow](https://stackoverflow.com/) - provide inpiration and resource for trouble shooting
