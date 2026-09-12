import { Fuel, Leaf, Zap } from "lucide-react";
import { FuelType } from "../types/fuel_type";

export const petrol: FuelType = {
    name: 'gasoline',
    color: '#F97316',
    icon: Fuel
}

export const diesel: FuelType = {
    name: 'diesel',
    color: '#FFFF00',
    icon: Fuel
}

export const electric: FuelType = {
    name: 'electric',
    color: '#0000FF',
    icon: Zap
}

export const hybrid: FuelType = {
    name: 'hybrid',
    color: '    #00ff00',
    icon: Leaf,
}