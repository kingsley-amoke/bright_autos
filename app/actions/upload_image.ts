import { createClient } from "../utils/supabase/server";

export const uploadCarImage = async (
  imageFile: File | null,
): Promise<string> => {
  if (!imageFile || imageFile.size === 0) return "";

  const supabase = await createClient();

  const fileExt = imageFile.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
  const filePath = `car-images/${fileName}`;

  const { error: storageError } = await supabase.storage
    .from("car")
    .upload(filePath, imageFile, {
      contentType: imageFile.type,
      upsert: false,
    });

  if (storageError) {
    throw new Error(`Storage upload failed: ${storageError.message}`);
  }

  const { data: urlData } = supabase.storage.from("car").getPublicUrl(filePath);

  return urlData.publicUrl;
};
