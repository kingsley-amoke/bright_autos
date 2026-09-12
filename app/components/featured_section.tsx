import React from "react";
import CarCard from "./car_card";
import { cars } from "../db/cars";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <div className="bg-slate-200 w-full p-16 flex flex-col items-center justify-center text-black ">
      <div className="flex justify-between items-center w-full max-w-4xl lg:max-w-full">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">
          Featured Section
        </h2>
        <Link
          href="/inventory"
          className="text-gray-700 text-orange-500 capitalize underline"
        >
          View full digital showroom
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full ">
        {cars.slice(0, 4).map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
