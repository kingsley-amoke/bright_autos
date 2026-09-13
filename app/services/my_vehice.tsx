"use client";

import { RefreshCcwIcon } from "lucide-react";
import React from "react";
import SearchBar from "../components/search_bar";
import MyVehicleCard from "./my_vehicle_card";

const MyVehicle = () => {
  const handleSearch = async () => {};

  return (
    <div className="my-12 p-12 bg-slate-200 text-black">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold text-3xl">My Vehicle</p>
          <p className="text-gray-400">
            Manage your registered vehicle details, warranties, and maintenance
            scheduling.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p>Last synced: Today, 08:30 AM</p>
          <RefreshCcwIcon />
        </div>
      </div>
      <div className="my-12">
        <SearchBar handleSearch={() => handleSearch} />
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div>
          <MyVehicleCard />
        </div>
        <div>
          <p>Quick Actions</p>
        </div>
      </div>
    </div>
  );
};

export default MyVehicle;
