import React from "react";
import Blog from "../Blog";
import data from "./data.json";
import "./Blogs.css";

function BlogsSection() {
  return (
    <section className="blogs-section">
      <div className="container">
        <h3 className="shadows-into-light-two-regular heading">Blogs</h3>
        <section className="flex justify-content-sp-btw align-items-center flex-column blogs-flex-wrap">
          {data.map((item: any) => (
            <Blog
              imgURI={item.imageURI}
              date={item.date}
              heading={item.heading}
              paragraph={item.main_article[0].substring(0, 200) + "...."}
              articleURI={item.articleURI}
            />
          ))}
        </section>
      </div>
    </section>
  );
}

export default BlogsSection;
