'use client'
import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';


function Navbar() {
  const pathname = usePathname()
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
      </div>
    </section>
  );
}

export default Navbar