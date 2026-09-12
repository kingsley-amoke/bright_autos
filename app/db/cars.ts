import { Car } from "../types/car";
import { hybrid, petrol } from "./fuel_types";
import { toyota } from "./manufacturers";




export const cars: Array<Car> = [
{
    id: "1",
    model: "Camry",
    year: 2020,
    color: "white",
    mileage: 20000,
    type: petrol,
    transmission: "automatic",
    price: 25000,
    drive: "front-wheel drive",
    engine: "2.5L 4-cylinder",
    condition: "used",
    vin: "1HGBH41JXMN109186",
    image: "/images/camry.jpg",
    manufacturer: toyota,
}, 
{
    id: "2",
    model: "Prius",
    year: 2021,
    color: "blue",
    mileage: 15000,
    type: hybrid,
    transmission: "automatic",
    price: 30000,
    drive: "front-wheel drive",
    engine: "1.8L 4-cylinder",
    condition: "used",
    vin: "1HGBH41JXMN109187",
    image: "/images/prius.jpg",
    manufacturer: toyota,
}]
