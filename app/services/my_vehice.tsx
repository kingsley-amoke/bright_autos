"use client";

import { FileWarning, RefreshCcwIcon, TriangleAlert } from "lucide-react";
import React from "react";
import SearchBar from "../components/search_bar";
import MyVehicleCard from "./my_vehicle_card";
import { quickActions } from "../constants/quick_actions";
import QuickActionCard from "./quick_action_card";
import PrimaryButton from "../components/primary_button";

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
      <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
        <div className="flex-1">
          <MyVehicleCard />
        </div>
        <div className="flex-1">
          <p className="font-bold uppercase text-2xl">Quick Actions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center items-center my-8">
            {quickActions.map((action) => (
              <QuickActionCard action={action} key={action.title} />
            ))}
          </div>
          <div className="flex justify-evenly items-center rounded-lg shadow shadow-sm bg-gray-100 p-8">
            <div className="p-2 rounded-full bg-orange-200/50">
              <TriangleAlert className="text-orange-500" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Scheduled Service Reminder</h4>
              <p className="text-gray-500">
                Your Toyota Camry is due for a 45,000-mile inspection and tire
                rotation
              </p>
            </div>
            <PrimaryButton onClick={() => {}}>Resolve</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVehicle;
