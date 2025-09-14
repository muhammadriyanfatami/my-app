"use client";

import FoodsHeader from "../components/foods/foods/FoodsHeader";
import FoodsHero from "../components/foods/foods/FoodsHero";
import FoodsPartners from "../components/foods/foods/FoodsPartners";
import FoodsPromo from "../components/foods/foods/FoodsPromo";
import FoodsExplorer from "../components/foods/foods/FoodsExplorer";
import FoodsTestimonial from "../components/foods/foods/FoodsTestimonial";
import FoodsWhyChooseUs from "../components/foods/foods/FoodsWhyChooseUs";
import FoodsFooter from "../components/foods/foods/FoodsFooter";


export default function FoodsPage() {
  return (
    <div className="min-h-screen bg-white">
      <FoodsHeader />
      <FoodsHero />
      <FoodsPartners />
      <FoodsPromo />
      <FoodsExplorer />
      <FoodsTestimonial />
      <FoodsWhyChooseUs />
      <FoodsFooter />
    </div>
  );
}
