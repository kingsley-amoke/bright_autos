import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutHero from "./hero";
import { StoryRow } from "./our_story";
import { ourStories } from "../constants/our_stories";

const About = () => {
  return (
    <div>
      <Header />

      <AboutHero />
      <section className="w-full bg-[#fdf6f0] px-6 py-16">
        <div className="relative mx-auto w-fit text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">Our Story</h2>
          <span className="mx-auto mt-2 block h-1 w-30 rounded-full bg-orange-500" />
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-20">
          {ourStories.map((story, i) => (
            <StoryRow key={i} shapeIndex={i} story={story} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
