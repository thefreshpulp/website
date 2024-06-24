import React from "react";

function Description() {
  return (
    <section className="description-section">
      <div className="description-container">
        <div className="flex justify-content-sp-btw align-items-center flex-column">
          <div>
            <img src="/home-2-left.png" alt="home 2 left" />
          </div>
          <article className="description-article">
            <h3 className="shadows-into-light-two-regular font-25">
              <span className="highlight">Pulppy </span>makes you want more!
            </h3>
            <p className="shadows-into-light-two-regular">
              Experience the refreshing taste of our handcrafted juices, made
              from the finest, freshest fruits. Every sip is packed with natural
              goodness, rich in vitamins and minerals to nourish your body.
              Pulppy – one taste, and you'll crave more!
            </p>
          </article>
          <div>
            <img src="/home-2-right.png" alt="home 2 right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
