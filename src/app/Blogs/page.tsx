import React from "react";
import Blog from "../Blog";
import data from "../data/data.json";
import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
import '../style/style.css';

function Blogs() {
  return (
    <section>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
        </style>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <Navbar/>
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
      <Footer/>
    </section>
  );
}

export default Blogs;
