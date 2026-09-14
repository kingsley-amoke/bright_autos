"use client";

import React from "react";

import { cars } from "../constants/cars";
import CarCard from "../components/car_card";
import Header from "../components/header";
import Footer from "../components/footer";

const InventoryPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />

      <main className="my-8 grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-12">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default InventoryPage;
