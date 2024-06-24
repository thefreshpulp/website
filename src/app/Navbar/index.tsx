import React from 'react';
import Link from 'next/link'


function Navbar() {
  return (
    <section className="navbar-section">
      <div className="container">
        <div className="flex justify-content-sp-btw align-items-center">
          <Link href='/'>
            <figure className="logo">
              <img src="/logo.png" alt="freshpulp logo" />
            </figure>
          </Link>
          <label className="bars" htmlFor="toggle">
            <img src="/icons/hamburger.png" alt="hamburger" />
          </label>
          <input id="toggle" type="checkbox" />
          <nav className="nav-bar">
            <ul className="navbar nav">
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
      </div>
    </section>
  );
}

export default Navbar