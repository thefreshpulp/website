'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname()
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
                <li className={pathname == "/" ? "active" : ""}>
                  <Link href='/' >Home</Link>
                </li>
                <li className={pathname == "/Cold-pressed" ? "active" : ""}>
                  <Link href='/Cold-pressed' >Cold-pressed</Link>
                </li>
                <li className={pathname == "/Juices" ? "active" : ""}>
                  <Link href='/Juices' >Juices</Link>
                </li>
                <li className={pathname == "/Snacks" ? "active" : ""}>
                  <Link href='/Snacks' >Snacks</Link>
                </li>
                <li className={pathname == "/Shakes" ? "active" : ""}>
                  <Link href='/Shakes' >Shakes</Link>
                </li>
                <li className={pathname == "/Stores" ? "active" : ""}>
                  <Link href='/Stores' >Our Outlets</Link>
                </li>
                <li className={pathname == "/Blogs" ? "active" : ""}>
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
