import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import TopNews from "./TopNews";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={TopNews} />
      </Switch>
    </>
  );
};
export default App;
