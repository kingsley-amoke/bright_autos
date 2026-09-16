"use client";

import React from "react";
import PrimaryButton from "./primary_button";
import FilterDropDown from "./filter_dropdown";

const FilterSection = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-4">
        <h3 className="font-bold text-3xl">Quick Vehicle Search</h3>
        <p className="text-gray-600">Refine your results with quick filters.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>New/Used</p>
          <FilterDropDown
            value={"new"}
            options={[
              { label: "New", value: "new" },
              { label: "Used", value: "used" },
              { label: "Certified Pre-Owned", value: "certified" },
            ]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Make</p>
          <FilterDropDown
            value={"all"}
            options={[{ label: "All Make", value: "all" }]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Model</p>
          <FilterDropDown
            value={"all"}
            options={[{ label: "All Model", value: "all" }]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Price</p>
          <FilterDropDown
            value={"all"}
            options={[
              { label: "Any Price", value: "all" },
              { label: "Under $20,000", value: "under-20k" },
              { label: "$20,000 - $40,000", value: "20k-40k" },
              { label: "$40,000 - $60,000", value: "40k-60k" },
              { label: "$60,000+", value: "60k-plus" },
            ]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Year</p>
          <FilterDropDown
            value={"all"}
            options={[
              { label: "Any Year", value: "all" },
              { label: "2023", value: "2023" },
              { label: "2022", value: "2022" },
              { label: "2021", value: "2021" },
              { label: "2020", value: "2020" },
              { label: "2019", value: "2019" },
              { label: "2018", value: "2018" },
              { label: "2017", value: "2017" },
              { label: "2016", value: "2016" },
              { label: "2015", value: "2015" },
            ]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Body Type</p>
          <FilterDropDown
            value={"all"}
            options={[
              { label: "All Body Types", value: "all" },
              { label: "Sedan", value: "sedan" },
              { label: "SUV", value: "suv" },
              { label: "Truck", value: "truck" },
              { label: "Coupe", value: "coupe" },
              { label: "Convertible", value: "convertible" },
              { label: "Hatchback", value: "hatchback" },
              { label: "Van", value: "van" },
            ]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Milage</p>
          <FilterDropDown
            value={"all"}
            options={[
              { label: "Any Milage", value: "all" },
              { label: "Under 10,000 miles", value: "under-10k" },
              { label: "10,000 - 50,000 miles", value: "10k-50k" },
              { label: "50,000 - 100,000 miles", value: "50k-100k" },
              { label: "100,000+ miles", value: "100k-plus" },
            ]}
            onChange={(value) => {}}
          />
        </div>
        <div className="shadow-sm p-4 rounded-xl bg-white">
          <p>Location</p>
          <FilterDropDown
            value={"all"}
            options={[{ label: "All Locations", value: "all" }]}
            onChange={(value) => {}}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <PrimaryButton onClick={() => {}}>Search</PrimaryButton>
      </div>
    </div>
  );
};

export default FilterSection;
