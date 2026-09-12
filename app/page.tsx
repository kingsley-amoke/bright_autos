import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import FilterSection from "./components/filter_section";
import FeaturedSection from "./components/featured_section";
import TestimonialSection from "./components/testimonial_section";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Hero />
      <main className="flex-grow flex flex-col bg-gray-100 text-gray-900p-4">
        <FilterSection />
        <FeaturedSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
