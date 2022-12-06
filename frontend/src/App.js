import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/">
          <h1>splash</h1>
        </Route>
      </Switch>
    </>
  );
}



export default App;
