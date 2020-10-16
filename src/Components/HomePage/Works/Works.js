import React from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import work1 from "../../../images/carousel-1.png";
import work2 from "../../../images/carousel-2.png";
import work4 from "../../../images/carousel-4.png";
import work5 from "../../../images/carousel-5.png";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  loop: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
  },
};

const Works = () => {
  return (
    <section className="work-section bg-dark p-5">
      <h2 className="text-center text-white mb-5">
        Here are some of <span className="brand-color">our works</span>
      </h2>
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        <div className="item">
          <img src={work1} />
        </div>
        <div className="item">
          <img src={work2} />
        </div>
        <div className="item">
          <img src={work4} />
        </div>
        <div className="item">
          <img src={work5} />
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Works;
