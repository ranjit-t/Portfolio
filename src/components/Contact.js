import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__heading">Get in touch</h2>
          <p className="contact__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            aliquet quam sit amet magna tincidunt, at fermentum erat facilisis.
            Aliquam semper bibendum est, in fermentum enim vehicula et.
          </p>
        </div>
        <form className="contact__form" method="POST" action="#">
          <div className="contact__form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="contact__form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="contact__form-group">
            <button type="submit" className="contact__button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
