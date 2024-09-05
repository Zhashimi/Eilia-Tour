import React, { useState } from "react";
import about from "../assets/images/about.jpeg";
import Title from "./title";
import MoreAbout from "./moreAbout";
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Our team of experienced guides is passionate about sharing the
            breathtaking beauty of Band-e-Amir, Afghanistan. We've spent
            countless hours exploring these stunning turquoise lakes, and we're
            dedicated to providing our guests with unforgettable experiences.
          </p>
          <p>
            Join us on a journey through the heart of the Hindu Kush, where
            you'll witness towering cliffs, crystal-clear waters, and a rich
            cultural heritage.
          </p>
          <button
            className="btn"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            read more
          </button>
          {isOpen && <MoreAbout isOpen={isOpen} onClose={onClose} />}
        </article>
      </div>
    </section>
  );
};

export default About;
