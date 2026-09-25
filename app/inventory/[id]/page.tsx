"use client";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Car } from "@/app/types/car";
import { useParams, useRouter } from "next/navigation";
import CarDetails from "../car_details";
import { useEffect, useState } from "react";
import { getCarById } from "@/app/actions/get_car";

const CarDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const carId = Array.isArray(id) ? id[0] : id;

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!carId) {
      router.replace("/");
      return;
    }

    let cancelled = false;

    const fetchCarFromDB = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await getCarById(carId);

        if (!cancelled) {
          if (!res) {
            setError("Car not found.");
            setCar(null);
            return;
          }

          setCar(res);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load car.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchCarFromDB();

    return () => {
      cancelled = true;
    };
  }, [carId, router]);

  return (
    <div className="bg-white text-black">
      <Header />

      <main className="flex justify-center items-center w-full p-12">
        {loading && <p>Loading...</p>}

        {!loading && error && <p className="text-red-600">{error}</p>}

        {!loading && !error && car && <CarDetails car={car} />}
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailsPage;
