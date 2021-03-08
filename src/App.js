import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// component
import Header from "./component/Header";
import TopNews from "./component/TopNews";
import TechnologyNews from "./component/TechnologyNews";
import BusinessNews from "./component/BussinessNews";

// css
import "./css/App.css";

const App = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* paths */}
      <Switch>
        <Route exact path="/" component={TopNews} />
        <Route path="/technology" component={TechnologyNews} />
        <Route path="/bussiness" component={BusinessNews} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

// gmail api key
// 2a2f7c81bb17454e99c1299ee2052e23
// hotmail api key
// 3081ea8510f14c59804b8fde69422151
// tanmay api key
// 26ba0fab82064367bf3c90626f468125
