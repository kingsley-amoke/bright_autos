"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { cars } from "@/app/constants/cars";
import { Car } from "@/app/types/car";
import { useParams, useRouter } from "next/navigation";
import CarDetails from "../car_details";

const CarDetailsPage = () => {
  const { id } = useParams();

  const car: Car = cars.find((c) => c.id == id)!;
  return (
    <div className="bg-white text-black">
      <Header />
      <main className="flex justify-center items-center w-full p-12">
        <CarDetails car={car} />
      </main>
      <Footer />
    </div>
  );
};

export default CarDetailsPage;
