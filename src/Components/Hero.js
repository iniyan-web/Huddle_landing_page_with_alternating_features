import React from "react";
import Header from "./Header";
import heroImg from "../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Header />
        <div className="hero-content">
          <div className="hero-text">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="btn hero-btn">Get Started For Free</button>
          </div>
          <img
            className="hero-img"
            src={heroImg}
            alt="A mockup illustration."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
