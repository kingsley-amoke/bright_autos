import React from "react";
import CarDetails from "../inventory/car_details";
import { Car } from "../types/car";
import { cars } from "../constants/cars";

const MyVehicleCard = ({ car }: { car: Car }) => {
  return (
    <div>
      <CarDetails car={car} showFullDetails={false} className="bg-gray-100" />
    </div>
  );
};

export default MyVehicleCard;
