"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { cars } from "../constants/cars";
import CarCard from "../components/car_card";
import Header from "../components/header";
import Footer from "../components/footer";

const InventoryList = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const condition = searchParams.get("condition");
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const price = searchParams.get("price");
  const year = searchParams.get("year");
  const bodyType = searchParams.get("bodyType");
  const mileage = searchParams.get("mileage");
  const location = searchParams.get("location");

  const filteredCars = cars.filter((car) => {
    if (searchQuery) {
      const matchesSearch =
        car.condition?.toLowerCase().includes(searchQuery) ||
        car.model?.toLowerCase().includes(searchQuery) ||
        car.drive?.toLowerCase().includes(searchQuery) ||
        car.transmission?.toLowerCase().includes(searchQuery) ||
        car.title?.toLowerCase().includes(searchQuery) ||
        car.color?.toLowerCase().includes(searchQuery) ||
        car.manufacturer.name?.toLowerCase().includes(searchQuery) ||
        car.year?.toString().includes(searchQuery);

      if (!matchesSearch) {
        return false;
      }
    }

    if (
      condition &&
      condition !== "all" &&
      car.condition?.toLowerCase() !== condition.toLowerCase()
    ) {
      return false;
    }

    if (
      make &&
      make !== "all" &&
      car.manufacturer.name?.toLowerCase() !== make.toLowerCase()
    ) {
      return false;
    }

    if (
      model &&
      model !== "all" &&
      car.model?.toLowerCase() !== model.toLowerCase()
    ) {
      return false;
    }

    if (year && year !== "all" && car.year?.toString() !== year) {
      return false;
    }

    if (
      bodyType &&
      bodyType !== "all" &&
      car.build?.toLowerCase() !== bodyType.toLowerCase()
    ) {
      return false;
    }

    if (
      location &&
      location !== "all" &&
      car.manufacturer.location?.toLowerCase() !== location.toLowerCase()
    ) {
      return false;
    }

    if (price && price !== "all") {
      const carPrice = Number(car.price);

      if (price === "under-20k" && carPrice >= 20000) {
        return false;
      }

      if (price === "20k-40k" && (carPrice < 20000 || carPrice > 40000)) {
        return false;
      }

      if (price === "40k-60k" && (carPrice < 40000 || carPrice > 60000)) {
        return false;
      }

      if (price === "60k-plus" && carPrice < 60000) {
        return false;
      }
    }

    if (mileage && mileage !== "all") {
      const carMileage = Number(car.mileage);

      if (mileage === "under-10k" && carMileage >= 10000) {
        return false;
      }

      if (mileage === "10k-50k" && (carMileage < 10000 || carMileage > 50000)) {
        return false;
      }

      if (
        mileage === "50k-100k" &&
        (carMileage < 50000 || carMileage > 100000)
      ) {
        return false;
      }

      if (mileage === "100k-plus" && carMileage < 100000) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
      <Header />

      <main className="my-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-600">
              No vehicles match your search.
            </h3>
            <p className="text-gray-400 mt-2">
              Try checking your spelling or using different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredCars.map((car, i) => (
              <CarCard key={i} car={car} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default InventoryList;
