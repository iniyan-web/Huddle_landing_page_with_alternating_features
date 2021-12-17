import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import featureCardData from "../featureCardData";

const FeatureCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  const displayFeatureCard = () => {
    const data = featureCardData;
    return data.map((item) => {
      return (
        <FeatureCard
          key={item.id}
          title={item.title}
          info={item.info}
          img={item.img.imgSrc}
          cardStyle={
            item.id % 2 === 0
              ? {
                  "flex-flow":
                    windowWidth <= 740
                      ? "column-reverse nowrap"
                      : "row-reverse nowrap",
                }
              : null
          }
          textStyle={item.id % 2 === 0 ? { "flex-basis": "46%" } : null}
        />
      );
    });
  };
  return (
    <>
      <section className="feature-cards">{displayFeatureCard()}</section>
    </>
  );
};

export default FeatureCards;
