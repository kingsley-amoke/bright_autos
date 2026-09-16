"use client";

import { TriangleAlert } from "lucide-react";

import PrimaryButton from "./primary_button";

const ResolveVehicle = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-between items-center rounded-lg shadow shadow-sm bg-gray-100 p-4">
      <div className="flex items-center flex-col sm:flex-row gap-8">
        <div
          className="p-2 lg:p-2 rounded-full bg-orange-200/50 flex justify-center items-center md:w-64"
          style={{ width: "42px", justifySelf: "center" }}
        >
          <TriangleAlert className="text-orange-500" />
        </div>
        <div>
          <h4 className="text-2xl font-bold">Scheduled Service Reminder</h4>
          <p className="text-gray-500">
            Your Toyota Camry is due for a 45,000-mile inspection and tire
            rotation
          </p>
        </div>
      </div>
      <PrimaryButton onClick={() => {}}>Resolve</PrimaryButton>
    </div>
  );
};

export default ResolveVehicle;
