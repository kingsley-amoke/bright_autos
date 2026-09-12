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
transmission: 'manual' | 'automatic';
price: number;
drive: string;
engine: string;
condition: string;
vin: string;
image: string;
manufacturer: Manufacturer;
}