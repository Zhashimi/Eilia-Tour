import React from "react";
import { featuredData } from "../data";
import Title from "./title";
import Featur from "./featur";

const Featured = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {featuredData.map((featured) => {
          return <Featur featured={featured} key={featured.id} />;
        })}
      </div>
    </section>
  );
};

export default Featured;
