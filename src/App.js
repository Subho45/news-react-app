import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// component
import Header from "./component/Header";
import TopNews from "./component/TopNews";
import TechnologyNews from "./component/TechnologyNews";
import BusinessNews from "./component/BussinessNews";

// css
import "./css/App.css";

const App = () => {
  // test
  const [randomNews, setRandomNews] = useState("");
  const getNewsHandler = (e) => {
    setRandomNews(e.target.value);
  };
  const setNewsHandler = () => {};

  return (
    <>
      {/* navbar */}
      <Header
        getNews={getNewsHandler}
        setNews={setNewsHandler}
        value={randomNews}
      />

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
