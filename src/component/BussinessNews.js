import React, { useEffect, useState } from "react";
import Modal from "react-modal";

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

  // full news is open or not value
  const [isOpen, setIsOpen] = useState(false);

  // full news detail
  const [fullNews, setFullNews] = useState([
    {
      urlToImage: "",
      title: "",
      description: "",
      author: "",
      publishedAt: "",
    },
  ]);

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

  // full news handler functionality
  const fullNewsHandler = (index) => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        const fullNewsData = response.data.articles.slice(index, index + 1);
        console.log(fullNewsData);
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
          style={{
            overlay: {
              zIndex: "1",
              backgroundColor: "rgba(0,0,0,0.5)",
            },
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
          <h1>{fullNews[0].title}</h1>
          <img
            src={fullNews[0].urlToImage}
            alt=""
            style={{ width: "100%", margin: "40px 0" }}
          />
          <p style={{ fontSize: "1.1rem" }}>{fullNews[0].description}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "70px",
            }}
          >
            <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {fullNews[0].publishedAt}
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              ~ {fullNews[0].author}
            </p>
          </div>
        </Modal>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default BusinessNews;
