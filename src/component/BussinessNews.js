import React, { useEffect, useState } from "react";

// component
import Banner from "./Banner";
import Card from "./Card";

// css
import "../css/App.css";

// image
import businessBannerImg from "../image/businessBanner.svg";

// icon
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
      <div className="footer">
        <div className="social__media__link">
          <a href="https://www.facebook.com/profile.php?id=100008004977942">
            <FacebookIcon fontSize="small" />
          </a>
          <a href="https://twitter.com/debojyotibabai1">
            <TwitterIcon fontSize="small" />
          </a>
          <a href="https://www.linkedin.com/in/debojyoti-ghosh-7003671a4/">
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
        <p>© Copyright TechNews | All Rights Reserved.</p>
      </div>
    </>
  );
};

export default BusinessNews;
