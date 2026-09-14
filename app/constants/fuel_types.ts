import { Fuel, Leaf, Zap } from "lucide-react";
import { FuelType } from "../types/fuel_type";

export const petrol: FuelType = {
    name: 'gasoline',
    color: '#F97316',
    icon: 'fuel'
}

export const diesel: FuelType = {
    name: 'diesel',
    color: '#FFFF00',
    icon: 'fuel'
}

export const electric: FuelType = {
    name: 'electric',
    color: '#0000FF',
    icon: 'zap'
}

export const hybrid: FuelType = {
    name: 'hybrid',
    color: '    #00ff00',
    icon: 'leaf'
}