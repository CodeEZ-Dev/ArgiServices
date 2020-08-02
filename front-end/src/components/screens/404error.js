import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="error-section">
        <div className="container">
          <div className="error-box">
            <img src="upload/blog/home5/error-404.jpg" alt="" />
            <a className="button-one" href="/">
              Go To HomePage
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
