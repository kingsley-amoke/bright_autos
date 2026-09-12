"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import PrimaryButton from "@/app/components/primary_button";
import { cars } from "@/app/db/cars";
import { Car } from "@/app/types/car";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const CarDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const car: Car = cars.find((c) => c.id == id)!;
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center w-full p-12">
        <div className="p-4 w-full lg:max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-xl shadow-black/30">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold text-2xl">{car.title}</h2>
              <p className="text-gray-300 text-sm">VIN: {car.vin}</p>
            </div>
            <p className="capitalize">{car.condition}</p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-xl">
            <Image
              priority
              src={car.image}
              alt={car.model}
              fill
              sizes="(max-width: 480px) 100vw, 384px"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="px-6 pb-6 pt-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Milage</p>
              <p>{car.mileage} miles</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Engine</p>
              <p className="capitalize">{car.engine}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Transmission</p>
              <p className="capitalize">{car.transmission}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Drive Train</p>
              <p className="capitalize">{car.drive}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Exterior Color</p>
              <p className="capitalize">{car.color}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Manufactured Location</p>
              <p className="capitaize">{car.manufacturer.location}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Type</p>
              <p className="capitalize">{car.type.name}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-200">Amount</p>
              <p className="capitalize">{`$${car.price.toLocaleString()}`}</p>
            </div>

            <PrimaryButton
              className="mt-6 flex w-full items-center justify-center gap-2 bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              onClick={() => router.push(`/inventory/${car.id}`)}
            >
              <p>Buy Now</p>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </PrimaryButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetails;
