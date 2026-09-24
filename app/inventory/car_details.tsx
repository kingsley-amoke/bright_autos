"use client";

import React from "react";
import { Car } from "../types/car";
import PrimaryButton from "../components/primary_button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CarDetails = ({
  car,
  showFullDetails = true,
  className,
}: {
  car: Car;
  showFullDetails?: boolean;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={`p-4 w-full lg:max-w-5xl overflow-hidden rounded-3xl shadow-sm shadow-black/30 ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-2xl">{car.title}</h2>
          {/* <p className="text-gray-500 text-sm">VIN: {car.vin}</p> */}
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
          <p className="text-gray-400">Milage</p>
          <p>{car.mileage} miles</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-400">Engine</p>
          <p className="capitalize">{car.engine}</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-400">Transmission</p>
          <p className="capitalize">{car.transmission}</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-400">Drive Train</p>
          <p className="capitalize">{car.drive}</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-400">Exterior Color</p>
          <p className="capitalize">{car.color}</p>
        </div>
        {showFullDetails && (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-400">Manufactured Location</p>
              <p className="capitaize">{car.manufacturer.location}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-400">Type</p>
              <p className="capitalize">{car.type.name}</p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-400">Amount</p>
              <p className="capitalize">{`$${car.price.toLocaleString()}`}</p>
            </div>

            <PrimaryButton
              className="mt-6 flex w-full items-center justify-center gap-2 bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              onClick={() => router.push(`/contact`)}
            >
              <p>Buy Now</p>
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </PrimaryButton>
            <div className="flex w-full justify-center items-center my-2">
              <p>
                Want to see more photos?.{" "}
                <Link href="/contact#dealership" className="text-orange-500">
                  Contact our sales/dealership
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
