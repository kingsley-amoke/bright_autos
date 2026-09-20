"use client";

import { FileWarning, RefreshCcwIcon, TriangleAlert } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../components/search_bar";
import MyVehicleCard from "./my_vehicle_card";
import { quickActions } from "../constants/quick_actions";
import QuickActionCard from "./quick_action_card";
import ResolveVehicle from "../components/resolve_vehicle";
import { cars } from "../constants/cars";

const MyVehicle = () => {
  const [myCar, setMyCar] = useState(cars[0]);
  const [notFoundText, setNotFoundText] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const searchText = formData.get("query") as string;

    if (!searchText) {
      console.log("no search");
      return;
    }

    if (searchText.trim()) {
      const car = cars.find(
        (car) =>
          car.condition?.toLowerCase().includes(searchText) ||
          car.model?.toLowerCase().includes(searchText) ||
          car.drive?.toLowerCase().includes(searchText) ||
          car.transmission?.toLowerCase().includes(searchText) ||
          car.title?.toLowerCase().includes(searchText) ||
          car.color?.toLowerCase().includes(searchText) ||
          car.manufacturer.name?.toLowerCase().includes(searchText) ||
          car.year?.toString().includes(searchText),
      );

      if (!car) {
        setNotFoundText("Car not in our inventory");

        return;
      }

      setMyCar(car);
    }
  };

  return (
    <div className="my-12 p-12 bg-slate-200 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold text-3xl">My Vehicle</p>
            <p className="text-gray-400">
              Manage your registered vehicle details, warranties, and
              maintenance scheduling.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>Last synced: Today, 08:30 AM</p>
            <RefreshCcwIcon />
          </div>
        </div>
        <div className="my-12 ">
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          <div className="flex-1">
            <MyVehicleCard car={myCar} />
          </div>
          <div className="flex-1">
            <p className="font-bold uppercase text-2xl">Quick Actions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center items-center my-8">
              {quickActions.map((action) => (
                <QuickActionCard action={action} key={action.title} />
              ))}
            </div>
            <ResolveVehicle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVehicle;
