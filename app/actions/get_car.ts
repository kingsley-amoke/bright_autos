import { Car, mapRowToCar } from "../types/car";
import { createClient } from "../utils/supabase/client";

export const getCars = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("cars").select("*");

  if (error) return [];

  return data.map((car: any) => ({
    ...car,
    type: car.fuel_type,
    image: car.image_url,
  })) as Array<Car>;
};

export const getCarById = async (id: string): Promise<Car> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`Failed to fetch car ${id}: ${error.message}`);
  }

  return mapRowToCar(data);
};
