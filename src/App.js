import React from "react";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import TopNews from "./TopNews";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={TopNews} />
        <Route path="/technology" component={TopNews} />
        <Route path="/bussiness" component={TopNews} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
