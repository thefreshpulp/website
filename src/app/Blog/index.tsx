import React from "react";
import Link from 'next/link'
import '../style/style.css';

function Blog({
  imgURI,
  date,
  heading,
  paragraph,
  articleURI,
}: {
  imgURI: string;
  date: string;
  heading: string;
  paragraph: string;
  articleURI: string;
}) {
  return (
    <section className="blog-section">
      <Link href={`/${articleURI}`}>
        <figure>
          <img src={imgURI} alt={imgURI} />
        </figure>
      </Link>
      <Link href={`/${articleURI}`}>
        <article>
          <p className="blog-date">{date}</p>
          <p className="blog-heading">{heading}</p>
          <p>{paragraph}</p>
          <p className="read-more">READ MORE</p>
        </article>
      </Link>
    </section>
  );
}

export default Blog;
