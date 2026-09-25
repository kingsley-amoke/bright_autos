import { FuelType } from "../types/fuel_type";

export const petrol: FuelType = {
  name: "gasoline",
  color: "#F97316",
  icon: "fuel",
};

export const diesel: FuelType = {
  name: "diesel",
  color: "#FFFF00",
  icon: "fuel",
};

export const electric: FuelType = {
  name: "electric",
  color: "#0000FF",
  icon: "zap",
};

export const hybrid: FuelType = {
  name: "hybrid",
  color: "#00FF00",
  icon: "leaf",
};

export const fuelTypes: Array<FuelType> = [petrol, diesel, electric, hybrid];
