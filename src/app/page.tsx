import Image from "next/image";
import './style/style.css';
import Navbar from './Navbar';
import Hero from "./Hero";
import Head from "next/head";
import SEO from "./SEO/SEO";
import Description from "./Description/Description";
import Products from "./Products";
import Display from "./Display";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs/page";
import Footer from "./Footer";
import BlogsSection from "./BlogsSection";
import SubscriptionTrivis from "./SubscriptionTrice";

export const metadata = {
  title: 'FRESH PULP',
  description: 'FRESH PULP',
}

export default function Home() {
  return (
    <section className="home-display">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
        </style>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Navbar />
      <Hero />
      <Description/>
      <SubscriptionTrivis/>
      <Products/>
      <Display/>
      <Testimonials/>
      <BlogsSection/>
      <Footer/>
    </section>
  );
}
