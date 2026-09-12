import { LucideIcon } from "lucide-react";

export type FuelType = {
    name: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
    color: string;
    icon: LucideIcon
}