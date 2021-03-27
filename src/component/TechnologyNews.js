import React, { useEffect, useState } from "react";
import Modal from "react-modal";

// component
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import FullNews from "./FullNews";

// css
import "../css/App.css";

// image
import technologyBannerImg from "../image/technologyBanner.svg";

// others
import axios from "axios";

const TechnologyNews = () => {
  // technology news detail
  const [technologyNews, setTechnologyNews] = useState([]);

  // full news is open or not value
  const [isOpen, setIsOpen] = useState(false);

  // full news detail
  const [fullNews, setFullNews] = useState([
    {
      title: "",
      multimedia: [{ url: "" }],
      abstract: "",
      published_date: "",
      byline: "",
    },
  ]);

  // technology news data fetch
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=317ppBXJwOyxCLAWOCvzKUzivzqRnqaE"
      )
      .then((response) => {
        setTechnologyNews(response.data.results);
      });
  }, []);

  // full news handler functionality
  const fullNewsHandler = (index) => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=317ppBXJwOyxCLAWOCvzKUzivzqRnqaE"
      )
      .then((response) => {
        const fullNewsData = response.data.results.slice(index, index + 1);
        setFullNews(fullNewsData);
      });
    setIsOpen(!isOpen);
  };

  // technology news card making
  const allTechnologyNews = technologyNews.map((eachNews, eachNewsIndex) => {
    return (
      <Card
        fullNews={fullNewsHandler.bind(this, eachNewsIndex)}
        img={eachNews.multimedia[0].url}
        heading={eachNews.title}
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

        {/* full news modal */}
        <Modal
          className="modal__content"
          overlayClassName="modal__overlay"
          isOpen={isOpen}
          onRequestClose={() => {
            setIsOpen(!isOpen);
          }}
          ariaHideApp={false}
        >
          <FullNews
            heading={fullNews[0].title}
            img={fullNews[0].multimedia[0].url}
            description={fullNews[0].abstract}
            publish={fullNews[0].published_date}
            author={fullNews[0].byline}
          />
        </Modal>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default TechnologyNews;
