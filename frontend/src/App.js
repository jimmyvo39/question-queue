import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage  from "./components/LoginFormPage"
import QuestionIndexPage  from "./components/QuestionIndexPage/index.js"
import SideNav from "./components/SideNav";
import SplashPage from "./components/SplashPage";

function App() {
  const sessionUser = useSelector(state => state.session.user);

  let SessionLinks;
  if (sessionUser) {
    SessionLinks = (
      <QuestionIndexPage />
    );
  } else {
    SessionLinks = (

      <SplashPage />
    );
  }

  return (
    <>
      <Navigation />
      <div className="body">
        <SideNav />

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
            {SessionLinks}
          </Route>

        </Switch>
      </div>
    </>
  );
}



export default App;
