// app/actions/cars.ts
"use server";

import { Car } from "../types/car";
import { createClient } from "../utils/supabase/server";

export async function createCarListing(carData: Omit<Car, "id">) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error("Unauthorized action. Admin session required.");
  }

  // 2. Insert directly into Supabase
  const { data, error } = await supabase
    .from("cars")
    .insert([
      {
        title: carData.title,
        model: carData.model,
        year: carData.year,
        color: carData.color,
        mileage: carData.mileage,
        fuel_type: carData.type, // Inserts the structured FuelType object
        transmission: carData.transmission,
        price: carData.price,
        drive: carData.drive,
        engine: carData.engine,
        condition: carData.condition,
        vin: carData.vin,
        image_url: carData.image,
        manufacturer: carData.manufacturer, // Inserts the structured Manufacturer object
        build: carData.build,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Database error:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
