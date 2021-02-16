import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import topBannerImg from "./image/topBanner.svg";
import "./App.css";
import axios from "axios";
import "./topNews.css";
import Weather from "./Weather";
import SidebarNews from "./SidebarNews";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const TopNews = () => {
  // sidebar news detail
  const [sidebarNewsDetail, setSidebarNewsDetail] = useState([]);

  // weather detail
  const [weatherDetail, setWeatherDetail] = useState({
    name: "",
    temp: "",
    description: "",
    icon: "",
  });

  // carousel news detail
  const [carouselNewsDetail, setCarouselNewsDetail] = useState([]);

  // weather data fetch
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=malda&appid=142edd739fe653be18bd7941f7adf3ca&units=metric"
      )
      .then((response) => {
        setWeatherDetail({
          name: response.data.name,
          temp: `${response.data.main.temp}° celsius`,
          description: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
        });
      });
  }, []);

  // sidebar news data fetch
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        setSidebarNewsDetail(response.data.articles);
      });
  }, []);

  // sidebar news card making
  const allSidebarNews = sidebarNewsDetail.map((eachNews, eachNewsIndex) => {
    return (
      <SidebarNews
        bbcImg={eachNews.urlToImage}
        bbcHeading={eachNews.title}
        key={eachNewsIndex}
      />
    );
  });

  // carousel news data fetch
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=2a2f7c81bb17454e99c1299ee2052e23"
      )
      .then((response) => {
        const carouselData = response.data.articles.slice(0, 5);
        setCarouselNewsDetail(carouselData);
        console.log(carouselData);
      });
  }, []);

  // carousel making
  const allCarouselNews = carouselNewsDetail.map((eachNews, eachNewsIndex) => {
    return (
      <SplideSlide className="carousel__detail" key={eachNewsIndex}>
        <a className="carousel__link" href={eachNews.url}>
          <img style={{ cursor: "pointer" }} src={eachNews.urlToImage} alt="" />
          <h1 style={{ cursor: "pointer" }}>{eachNews.title}</h1>
        </a>
      </SplideSlide>
    );
  });

  return (
    <div className="section__width">
      {/* top banner */}
      <Banner
        bannerHeading="Welcome to TechNew's Top News section."
        bannerImg={topBannerImg}
      />

      <div className="sidebar__weather__section">
        {/* sidebar news */}
        <div className="sidebar__news">
          <h1 className="sidebar__news__heading">BBC Shorts:</h1>
          {allSidebarNews}
        </div>

        {/* weather banner */}
        <Weather
          name={weatherDetail.name}
          temp={weatherDetail.temp}
          description={weatherDetail.description}
          icon={weatherDetail.icon}
        />
      </div>

      {/* top news section */}
      <div className="news__section">
        <h1 className="news__section__heading">Today's Top News</h1>
      </div>

      {/* top news carousel */}
      <Splide className="carousel">{allCarouselNews}</Splide>
    </div>
  );
};
export default TopNews;
