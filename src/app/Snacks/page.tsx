import Image from "next/image";
import '../style/style.css';
import Navbar from '../Navbar';
import Hero from "../Hero";
import Head from "next/head";
import Description from "../Description/Description";
import Products from "./products";
import Display from "../Display";
import Testimonials from "../Testimonials";
import Blogs from "../Blogs/page";
import Footer from "../Footer";
import AllProducts from "../AllProducts";
import BlogsSection from "../BlogsSection";

export const metadata = {
  title: 'FRESH PULP',
  description: 'FRESH PULP',
}

export default function Page() {
  return (
    <section>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
        </style>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <Navbar />
      <Products/>
      <Testimonials/>
      <BlogsSection/>
      <Footer/>
    </section>
  );
}
