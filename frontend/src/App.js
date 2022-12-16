import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage  from "./components/LoginFormPage"
import QuestionIndexPage  from "./components/QuestionIndexPage/index.js"
import SideNav from "./components/SideNav";
import SplashPage from "./components/SplashPage";
import QuestionFormPage from "./components/QuestionFormPage";
import QuestionShowPage from "./components/QuestionShowPage";
import QuestionEditPage from "./components/QuestionEditPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const sessionUser = useSelector(state => state.session.user);

  let SessionLinks;
  if (sessionUser) {
    SessionLinks = (
      <>
        <SideNav />
        <QuestionIndexPage />
      </>
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
    <ScrollToTop/>
      <Switch>
        
        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path="/login">
          <LoginFormPage />
        </Route>

        <Route path="/new"  >
          <QuestionFormPage />
        </Route>

        <Route exact path="/">
          {SessionLinks}
        </Route>
        
        <Route exact path="/questions"  >
          
          <SideNav />
          <QuestionIndexPage />
        </Route>

        <Route  exact path="/questions/:questionId"  >
          <SideNav />
          <QuestionShowPage/>
        </Route>

        <Route  path="/questions/:questionId/edit"  >
          <SideNav />
          <QuestionEditPage />
        </Route>

        <Route  path="/users"  >
          <SideNav />
          <h1>Status: 404 These Are Not the Droids You Are Looking For</h1>
        </Route>



      </Switch>
    </div>
    </>
  );
}



export default App;
