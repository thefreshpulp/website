'use client'
import {useParams} from 'next/navigation';
import Navbar from '../Navbar';
import Hero from "../Hero";
import Head from "next/head";
import SEO from "../SEO/SEO";
import Description from "../Description/Description";
import Products from "../Products";
import Display from "../Display";
import Testimonials from "../Testimonials";
import Blogs from "../Blogs/page";
import Footer from "../Footer";
import '../style/style.css';
import Article from '../Article';
import { useState } from 'react';
import data from '../data/data.json';
import BlogsSection from '../BlogsSection';

export default function Page() {
  const router = useParams()
  const [allData] = useState<any>(data);
  return (
    <section>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light+Two&display=swap');
        </style>
      </Head>
      <Navbar />
      <Article data={(allData.filter((item:any) => item.articleURI === router?.slug))[0]}/>
      <BlogsSection/>
      <Footer/>
    </section>
  )
};