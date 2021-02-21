import React from "react";

// component
import Banner from "./Banner";

// css
import "../css/TechnologyNews.css";
import "../css/App.css";

// image
import technologyBannerImg from "../image/technologyBanner.svg";

const TechnologyNews = () => {
  return (
    <>
      <div className="section__width">
        {/* top banner */}
        <Banner
          bannerHeading="Welcome to TechNew's Technology News section."
          bannerImg={technologyBannerImg}
        />
      </div>
    </>
  );
};

export default TechnologyNews;
