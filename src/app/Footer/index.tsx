import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="flex justify-content-sp-btw flex-column">
          <div className="footer-sub-section">
            <figure className="logo">
              <img src="/logo.png" alt="logo" />
            </figure>
            <nav className="footer-icon-section">
              <ul className="flex justify-content-sp-btw align-items-center">
                <li>
                  <a href="https://www.facebook.com/people/Thefreshpulp/61550677089161/?mibextid=ZbWKwL">
                    <img src="/icons/facebook.png" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="/icons/instagram.png" />
                  </a>
                </li>
                <li>
                  <img src="/icons/twitter.png" />
                </li>
                <li>
                  <a href="https://www.whatsapp.com/catalog/916300794400">
                    <img src="/icons/whatsapp.png" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-sub-section">
            <nav>
              <ul>
                <li className="bold">FRESH PULP COMPANY</li>
                <li>
                  <Link href='/' >Home</Link>
                </li>
                <li>
                  <Link href='/Juices' >Menu</Link>
                </li>
                <li>
                  <Link href='/Blogs' >Blogs</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-sub-section">
            <nav>
              <ul>
                <li className="bold">CONTACT US</li>
                <a href="mailto:hello@thefreshpulp.com">
                  <li>hello@thefreshpulp.com</li>
                </a>
                <a href="tel:+916300794400">
                  <li>+91-6300794400</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
