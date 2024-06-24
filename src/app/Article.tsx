import Head from "next/head";
import React from "react";

function Article(data: any) {
  console.log(data)
  return (
    <section className="article-section">
        <Head>
            <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
            </style>
        </Head>
        <div className="container">
            <h4>{data?.data?.heading}</h4>
            <p>{data?.data?.date}</p>
            <figure className="article-figure">
              <img src={data?.data?.imageURI}/>
            </figure>
            <article>{data?.data?.main_article.map((article: string) => <p>{article}</p>)}</article>
        </div>
    </section>
  );
}

export default Article;
