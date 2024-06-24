import React from "react";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="display-container">
        <h3 className="shadows-into-light-two-regular heading">Testimonials</h3>
        <div className="flex justify-content-sp-btw align-items-center">
          <div></div>
          <figure className="margin-bottom">
            <img src="/testimonals/Mask-Group-102-1.png" alt="lemon one" />
          </figure>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-content-sp-btw align-items-center padding-2 flex-column">
          <figure className="snip1192">
            <blockquote>
              The Fresh Pulp's juices are incredibly fresh and flavorful, using
              top-notch ingredients. Their tropical blend is my favorite,
              offering a burst of natural goodness. Highly recommend for a
              delicious and refreshing drink!.{" "}
            </blockquote>
            <div className="author">
              <img
                src="/testimonals/nagarjuna.jpeg"
                alt="Nagarjuna"
              />
              <h5>Nagarjuna</h5>
            </div>
          </figure>
          <figure className="snip1192 hover">
            <blockquote>
              The Fresh Pulp offers the most delicious and refreshing juices I
              have ever tasted. The flavors are amazing and the quality is
              top-notch. Highly recommend!
            </blockquote>
            <div className="author">
              <img
                src="/testimonals/rohit.jpeg"
                alt="Rohit"
              />
              <h5>Rohit</h5>
            </div>
          </figure>
          <figure className="snip1192">
            <blockquote>
              I love the wide variety of juice options available at The Fresh
              Pulp. From classic flavors to unique combinations, there is
              something for everyone. The juices are always fresh and full of
              flavor..
            </blockquote>
            <div className="author">
              <img
                src="/testimonals/santhosh.jpeg"
                alt="Santhosh"
              />
              <h5>Santhosh</h5>
            </div>
          </figure>
        </div>
      </div>
      <div className="display-container">
        <div className="flex">
          <div></div>
          <figure className="margin-top">
            <img src="/testimonals/Mask-Group-7-1.png" alt="lemon two" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
