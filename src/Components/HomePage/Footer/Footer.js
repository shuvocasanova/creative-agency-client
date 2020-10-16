import React from "react";

const Footer = () => {
  function shoot() {
    alert("Great Shot!");
  }
  return (
    <footer className="footer pt-5 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Let us handle your project, professionally.</h2>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className="col-md-6">
            <input
              className="form-control p-4"
              type="text"
              placeholder="Your email address"
            />
            <input
              className="form-control p-4 my-2"
              type="text"
              placeholder="Your name / company’s name"
            />
            <textarea
              rows="5"
              className="form-control p-4"
              type="text"
              placeholder="Your message"
            />
            <button className="btn btn-dark px-5 mt-2 mb-5" onClick={shoot} >Send</button>
            
          </div>
        </div>
      </div>
      <p className="text-muted text-center my-5">copyright &copy;Shuvo Kumer Das || 2020</p> 
    </footer>
  );
};

export default Footer;
