import React, { useEffect, useState } from "react";

// component
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

// css
import "../css/App.css";

// image
import technologyBannerImg from "../image/technologyBanner.svg";

// others
import axios from "axios";

const TechnologyNews = () => {
  // technology news detail
  const [technologyNews, setTechnologyNews] = useState([]);

  // technology news data fetch
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        setTechnologyNews(response.data.articles);
      });
  }, []);

  // technology news card making
  const allTechnologyNews = technologyNews.map((eachNews, eachNewsIndex) => {
    return (
      <Card
        link={eachNews.url}
        img={eachNews.urlToImage}
        heading={eachNews.title}
        detail={eachNews.description}
        key={eachNewsIndex}
      />
    );
  });

  return (
    <>
      <div className="section__width">
        {/* business banner */}
        <Banner
          bannerHeading="Welcome to TechNew's Technology section."
          bannerImg={technologyBannerImg}
        />

        {/* technology news section */}
        <div className="news__section">
          <h1 className="news__section__heading">Today's Technology News</h1>

          {/* technology news */}
          <div className="main__news__section">{allTechnologyNews}</div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default TechnologyNews;
