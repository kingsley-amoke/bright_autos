"use client";

import React, { useEffect, useState } from "react";
import CarCard from "./car_card";
import { cars } from "../constants/cars";
import Link from "next/link";
import { Car } from "../types/car";
import { getCars } from "../actions/get_car";

const FeaturedSection = () => {
  const [dbCars, setDbCars] = useState<Array<Car>>(cars);

  useEffect(() => {
    fetchCarsFromDb();
  }, []);

  const fetchCarsFromDb = async () => {
    const res = await getCars();
    if (res.length < 1) return;

    if (res.length > 4) {
      setDbCars(res.slice(0, 4));
      return;
    }

    setDbCars(res);
  };

  return dbCars.length < 1 ? (
    <></>
  ) : (
    <div className="bg-slate-200 w-full p-16 flex flex-col items-center justify-center text-black ">
      <div className="mx-auto max-w-6xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full ">
          {dbCars.slice(0, 4).map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
