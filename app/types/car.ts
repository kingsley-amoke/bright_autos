import { FuelType } from "./fuel_type";
import { Manufacturer } from "./manufacturer";

export type Car = {
  id: string;
  title: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  type: FuelType;
  transmission: "manual" | "automatic";
  price: number;
  drive: string;
  engine: string;
  condition: string;
  vin: string;
  image: string;
  manufacturer: Manufacturer;
  build: string;
};


type CarRow = {
  id: string;
  title: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  fuel_type: Car["type"];
  transmission: Car["transmission"];
  price: number;
  drive: string;
  engine: string;
  condition: string;
  vin: string;
  image_url: string;
  manufacturer: Car["manufacturer"];
  build: string;
};

export const mapRowToCar = (row: CarRow): Car => ({
  id: row.id,
  title: row.title,
  model: row.model,
  year: row.year,
  color: row.color,
  mileage: row.mileage,
  transmission: row.transmission,
  price: row.price,
  drive: row.drive,
  engine: row.engine,
  condition: row.condition,
  vin: row.vin,
  image: row.image_url,
  build: row.build,
  manufacturer: row.manufacturer,
  type: row.fuel_type,
});