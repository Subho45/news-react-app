import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// component
import Header from "./Header";
import TopNews from "./TopNews";

const App = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* paths */}
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
