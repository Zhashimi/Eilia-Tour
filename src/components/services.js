import React from "react";
import { servicesData } from "../data";
import Title from "./title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((ser) => {
          return (
            <article className="service" key={ser.id}>
              <span className="service-icon">
                <i className={ser.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{ser.header}</h4>
                <p className="service-text">{ser.info}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
