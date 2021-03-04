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
      urlToImage: "",
      description: "",
      publishedAt: "",
      author: "",
    },
  ]);

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

  // full news handler functionality
  const fullNewsHandler = (index) => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        const fullNewsData = response.data.articles.slice(index, index + 1);
        setFullNews(fullNewsData);
      });
    setIsOpen(!isOpen);
  };

  // technology news card making
  const allTechnologyNews = technologyNews.map((eachNews, eachNewsIndex) => {
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
          overlayClassName="modal__overlay"
          style={{
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              padding: "50px",
              width: "70%",
              height: "90%",
            },
          }}
          isOpen={isOpen}
          onRequestClose={() => {
            setIsOpen(!isOpen);
          }}
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

export default TechnologyNews;
