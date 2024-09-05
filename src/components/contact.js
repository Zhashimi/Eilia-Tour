import React from "react";
import Title from "./title";
function Contact() {
  return (
    <section className="section services" id="about">
      <Title title="contact" subTitle="us" />

      <div className="section-center contact " style={{ padding: "10px" }}>
        <form action="#">
          <input type="text" placeholder="Name *" />
          <input type="email" placeholder="Email *" />
          <input type="phone" placeholder="Phone" />
          <textarea rows="4" placeholder="Message"></textarea>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
