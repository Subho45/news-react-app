import React, { useEffect, useState } from "react";

// component
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

// css
import "../css/App.css";

// image
import businessBannerImg from "../image/businessBanner.svg";

// others
import axios from "axios";

const BusinessNews = () => {
  // business news detail
  const [businessNews, setBusinessNews] = useState([]);

  // business news data fetch
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        setBusinessNews(response.data.articles);
      });
  }, []);

  // business news card making
  const allBusinessNews = businessNews.map((eachNews, eachNewsIndex) => {
    return (
      <Card
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
          bannerHeading="Welcome to TechNew's Business News section."
          bannerImg={businessBannerImg}
        />

        {/* business news section */}
        <div className="news__section">
          <h1 className="news__section__heading">Today's Business News</h1>

          {/* business news */}
          <div className="main__news__section">{allBusinessNews}</div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default BusinessNews;
