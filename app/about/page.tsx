import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutHero from "./hero";
import { StoryRow } from "./our_story";
import { ourStories } from "../constants/our_stories";
import { coreValues } from "../constants/core_values";
import CoreValueItem from "./core_value_item";
import { services2 } from "../constants/services_2";
import OurTeam from "./our_team";
import { teamMembers } from "../constants/team_members";
import { memberCategories } from "../constants/member_categories";

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
      <section className="my-12 p-12 bg-slate-200">
        <div className="relative mx-auto w-1/3 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Core Values
          </h2>
          <p className="text-gray-500">
            Our values define how we serve our customers, work with our team,
            and build lasting relationship. They guide every decision we make
            and ensure that every interaction reflects the standards we stand
            for.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg-grid-cols-4 mx-auto justify-evenly items-start gap-4 py-12 max-w-6xl">
          {coreValues.map((value) => (
            <CoreValueItem
              value={value}
              key={value.title}
              className="rounded-full"
            />
          ))}
        </div>
      </section>
      <section className="my-12 p-12 bg-[#fdf6f0]">
        <div className="max-w-6xl mx-auto">
          <div className="relative mx-auto w-1/2 text-center ">
            <h2 className="text-2xl font-extrabold text-orange-500 uppercase p-2 bg-orange-500/10 rounded-3xl">
              Why Choose BrightSON Autos
            </h2>
            <p className="text-gray-500 my-4">
              From quality vehicles and flexible financing to expert servicing
              and long-term support, we are committed to making your journey
              exceptional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 mx-auto justify-evenly items-start gap-4 py-12">
            {services2.map((value) => (
              <CoreValueItem
                value={value}
                key={value.title}
                iconLeft={false}
                className="rounded-md bg-orange-500/10"
                iconColor="#F97316"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="my-12 p-12">
        <div className="relative mx-auto text-center">
          <h2 className="text-2xl font-extrabold  uppercase ">
            <span className="text-orange-500 p-2 px-4 bg-orange-500/10 rounded-3xl">
              Our Team
            </span>
          </h2>
          <p className="text-gray-500 my-4">
            Meet Our Team — get to know the people behind every great
            experience.
          </p>
        </div>
        <OurTeam members={teamMembers} categories={memberCategories} />;
      </section>
      <Footer />
    </div>
  );
};

export default About;
