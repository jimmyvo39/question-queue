![This is an image](/asset/logo.png)
# Question queue


[Question queue](https://question-queue.onrender.com/) is a clone project of [stack overflow](https://stackoverflow.com/),  the question and answer website for programmers.

## Functionality & MVPs

In Question queue users are currently able to:
 - to signup and login with their registered credentials
 - read question as users
 - ask questions as registerd users
 - update questions as registerd users
 - delete questions as registerd users
 

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

### Render logic based on login status
using react-redux's useSelector hook, i check the current state for an existing login. The navbar is rendered with particular componenets depending on the status. 

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
### Render logic based on login status and User ID

While any question can be read. logged in users can only edit, update, and delete their own questions. With this logic i render an empty div in place of a delete button if the the question does not belong to the user or their is no one logged in.


## Anticipated updates include:
- full CRUD functionality for answers
- ability to search
- ability to vote 

### Acknowledgement
[Meyer Web](https://meyerweb.com/eric/tools/css/reset/) - providing CSS Reset

[Stack Overflow](https://stackoverflow.com/) - provide inpiration and resource for trouble shooting