"use server";

import { Car } from "../types/car";
import { createClient } from "../utils/supabase/server";
import { uploadCarImage } from "./upload_image";

const createCarListing = async (
  carData: Omit<Car, "id">,
  imageFile: File | null,
) => {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error("Unauthorized action. Admin session required.");
  }

  try {
    const uploadedImageUrl = await uploadCarImage(imageFile);

    const { data, error } = await supabase
      .from("cars")
      .insert([
        {
          title: carData.title,
          model: carData.model,
          year: carData.year,
          color: carData.color,
          mileage: carData.mileage,
          fuel_type: carData.type,
          transmission: carData.transmission,
          price: carData.price,
          drive: carData.drive,
          engine: carData.engine,
          condition: carData.condition,
          vin: carData.vin,
          image_url: uploadedImageUrl || carData.image,
          manufacturer: carData.manufacturer,
          build: carData.build,
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Action error:", error.message);
    return { success: false, error: error.message };
  }
};

export const createCarListingAction = async (formData: FormData) => {
  const rawCarData = formData.get("carData");
  if (typeof rawCarData !== "string") {
    return { success: false, error: "Missing car data in submission." };
  }

  let carData: Omit<Car, "id">;
  try {
    carData = JSON.parse(rawCarData);
  } catch {
    return { success: false, error: "Malformed car data in submission." };
  }

  const imageFile = formData.get("image");
  const imageFileOrNull = imageFile instanceof File ? imageFile : null;

  return createCarListing(carData, imageFileOrNull);
};
