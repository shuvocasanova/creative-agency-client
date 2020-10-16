import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const BrandLogo = () => {
  return (
    <div className="container mb-5">
      <div className="brand-logo px-5">
        <img src={slack} alt="slack" />
        <img src={google} alt="slack" />
        <img src={uber} alt="slack" />
        <img src={netflix} alt="slack" />
        <img src={airbnb} alt="slack" />
      </div>
    </div>
  );
};

export default BrandLogo;
