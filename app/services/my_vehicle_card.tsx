import React from "react";
import CarDetails from "../inventory/car_details";
import { Car } from "../types/car";
import { cars } from "../constants/cars";

const MyVehicleCard = () => {
  const myCar: Car = cars[0];
  return (
    <div>
      <CarDetails car={myCar} showFullDetails={false} className="bg-gray-100" />
    </div>
  );
};

export default MyVehicleCard;
