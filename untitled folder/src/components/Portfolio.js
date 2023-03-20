import "./Portfolio.css";

import React from "react";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__header">
          <h2 className="portfolio__heading">Portfolio</h2>
          <p className="portfolio__text">
            Here are some of the projects that I've worked on recently.
          </p>
        </div>
        <div className="portfolio__grid">
          <div className="portfolio__card">
            <img
              src="https://images.unsplash.com/photo-1573497497433-fd3abd3c00e1"
              alt="Project"
              className="portfolio__card-image"
            />
            <h3 className="portfolio__card-heading">Project 1</h3>
            <p className="portfolio__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              ipsum auctor, eleifend elit non, vehicula nisi.
            </p>
          </div>
          <div className="portfolio__card">
            <img
              src="https://images.unsplash.com/photo-1542744094-55cdfead1e7f"
              alt="Project"
              className="portfolio__card-image"
            />
            <h3 className="portfolio__card-heading">Project 2</h3>
            <p className="portfolio__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              ipsum auctor, eleifend elit non, vehicula nisi.
            </p>
          </div>
          <div className="portfolio__card">
            <img
              src="https://images.unsplash.com/photo-1556228725-84d5c2dbf6d9"
              alt="Project"
              className="portfolio__card-image"
            />
            <h3 className="portfolio__card-heading">Project 3</h3>
            <p className="portfolio__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              ipsum auctor, eleifend elit non, vehicula nisi.
            </p>
          </div>
          <div className="portfolio__card">
            <img
              src="https://images.unsplash.com/photo-1562887254-4e4e81da239c"
              alt="Project"
              className="portfolio__card-image"
            />
            <h3 className="portfolio__card-heading">Project 4</h3>
            <p className="portfolio__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
              ipsum auctor, eleifend elit non, vehicula nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
