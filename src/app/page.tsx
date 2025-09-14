"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <Footer />
    </>
  );
};