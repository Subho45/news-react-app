import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// component
import Header from "./component/Header";
import TopNews from "./component/TopNews";
import TechnologyNews from "./component/TechnologyNews";
import BusinessNews from "./component/BussinessNews";

// css
import "./css/App.css";

// others
import axios from "axios";

const App = () => {
  // search news result detail
  const [searchResult, setSearchResult] = useState([]);

  // search news result functionality
  const showNewsHandler = (e) => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=${e.target.value}&apiKey=2a2f7c81bb17454e99c1299ee2052e23`
      )
      .then((response) => {
        setSearchResult(response.data.articles.slice(0, 5));
      });
  };

  return (
    <>
      {/* navbar */}
      <Header showNews={showNewsHandler} />

      {/* display search news result */}
      {searchResult.length !== 0 ? (
        <div className="search__result">
          {searchResult.map((eachResult, eachResultIndex) => {
            return (
              <a href={eachResult.url} key={eachResultIndex}>
                {eachResult.title}
              </a>
            );
          })}
        </div>
      ) : null}

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
