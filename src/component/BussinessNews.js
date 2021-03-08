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
import businessBannerImg from "../image/businessBanner.svg";

// others
import axios from "axios";

const BusinessNews = () => {
  // business news detail
  const [businessNews, setBusinessNews] = useState([]);

  // full news is open or not value
  const [isOpen, setIsOpen] = useState(false);

  // full news detail
  const [fullNews, setFullNews] = useState([
    {
      title: "",
      urlToImage: "",
      description: "",
      publishedAt: "",
      author: "",
    },
  ]);

  // business news data fetch
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3081ea8510f14c59804b8fde69422151"
      )
      .then((response) => {
        setBusinessNews(response.data.articles);
      });
  }, []);

  // full news handler functionality
  const fullNewsHandler = (index) => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3081ea8510f14c59804b8fde69422151"
      )
      .then((response) => {
        const fullNewsData = response.data.articles.slice(index, index + 1);
        setFullNews(fullNewsData);
      });
    setIsOpen(!isOpen);
  };

  // business news card making
  const allBusinessNews = businessNews.map((eachNews, eachNewsIndex) => {
    return (
      <Card
        fullNews={fullNewsHandler.bind(this, eachNewsIndex)}
        img={eachNews.urlToImage}
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
          bannerHeading="Welcome to TechNew's Business section."
          bannerImg={businessBannerImg}
        />

        {/* business news section */}
        <div className="news__section">
          <h1 className="news__section__heading">Today's Business News</h1>

          {/* business news */}
          <div className="main__news__section">{allBusinessNews}</div>
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
            img={fullNews[0].urlToImage}
            description={fullNews[0].description}
            publish={fullNews[0].publishedAt}
            author={fullNews[0].author}
          />
        </Modal>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default BusinessNews;
