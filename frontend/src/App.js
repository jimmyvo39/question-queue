import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage  from "./components/LoginFormPage"
import QuestionIndexPage  from "./components/QuestionIndexPage/index.js"

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path="/login">
          <LoginFormPage />
        </Route>

        <Route path="/questions"  >
          <>
           <QuestionIndexPage />
          </>
        </Route>

        <Route exact path="/">
          <h1>splash</h1>
        </Route>

      </Switch>
    </>
  );
}



export default App;
