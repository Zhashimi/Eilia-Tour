import React from "react";

const Featur = ({ featured }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={featured.photo} className="tour-img" alt={featured.header} />
        <p className="tour-date">{featured.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{featured.header}</h4>
        </div>
        <p>{featured.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            Bamyan, Afghanistan
          </p>
          <p>{featured.duration}</p>
          <p>{featured.price}</p>
        </div>
      </div>
    </article>
  );
};

export default Featur;
