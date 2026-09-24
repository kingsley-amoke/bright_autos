import { Car } from "../types/car";
import { createClient } from "../utils/supabase/client";

export async function getCars() {
  const supabase = createClient();

  const { data, error } = await supabase.from("cars").select("*");

  if (error) return [];

  return data.map((car: any) => ({
    ...car,
    type: car.fuel_type,
    image: car.image_url,
  })) as Array<Car>;
}
