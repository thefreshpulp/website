import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="flex justify-content-sp-btw align-items-center hero-wrapper flex-column">
          <article className="home-hero-left">
            <h2 className="heading-small-title">SIP & SAVOR</h2>
            <h4 className="heading-tilte">FreshPulp</h4>
            <p className="home-hero-paragraph shadows-into-light-two-regular">
              FreshPulp is your go-to spot for amazing juices in the heart of
              India's bustling markets. Each sip is a journey through flavors,
              carefully crafted to delight your taste buds. It's not just about
              the juice. it's about savoring every moment of life. Join us at
              FreshPulp, where friends gather, stories flow, and
              laughter fills the air. Experience the joy of simple pleasures
              with every refreshing sip. we believe in the
              power of fresh juice to nourish and revitalize your body. Our
              juices are made from the finest fruits and vegetables, carefully
              selected for their quality and taste. Start your day with a burst
              of natural energy and enjoy the benefits of a healthy lifestyle.
            </p>
          </article>
          <section className="home-hero-right">
            <img src="/home-hero-right.png" alt="home hero right" />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Hero;
