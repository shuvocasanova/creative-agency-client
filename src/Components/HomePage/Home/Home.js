import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Service";
import Works from "../Works/Works";

const Home = () => {
  document.title = "Creative Agency";
  return (
    <>
      <Header />
      <BrandLogo />
      <Services />
      <Works />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
