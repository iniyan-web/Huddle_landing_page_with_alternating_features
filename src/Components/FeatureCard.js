import React from "react";

const FeatureCard = ({ title, info, img, cardStyle, textStyle }) => {
  return (
    <>
      <div className="feature-card" style={cardStyle}>
        <div className="fc-text" style={textStyle}>
          <h2 className="title">{title}</h2>
          <p className="info">{info}</p>
        </div>
        <img
          className="fc-img"
          src={img}
          alt="Illustartion of huddle features."
        />
      </div>
    </>
  );
};

export default FeatureCard;
