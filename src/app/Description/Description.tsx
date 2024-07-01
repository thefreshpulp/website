import Head from "next/head";
import React from "react";

function Description() {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
        </style>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <section className="description-section">
        <div className="description-container">
          <div className="flex justify-content-sp-btw align-items-center flex-column">
            <div>
              <img src="/home-2-left.png" alt="home 2 left" />
            </div>
            <article className="description-article">
              <h3 className="shadows-into-light-two-regular font-25">
                <span className="highlight">Fresh Pulp</span> makes you want more!
              </h3>
              <p className="shadows-into-light-two-regular">
                Experience the refreshing taste of our handcrafted juices, made
                from the finest, freshest fruits. Every sip is packed with natural
                goodness, rich in vitamins and minerals to nourish your body.
                Fresh Pulp – one taste, and you'll crave more!
              </p>
            </article>
            <div>
              <img src="/home-2-right.png" alt="home 2 right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
