"use server";
import path from "path";
import fs from "fs";
import { ImageType } from "@/components/shared/image-uploader";

const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

type UploadResponse = {
  data?: ImageType[];
  error?: string;
};
type OtherResponse = {
  data?: boolean;
  error?: string;
};

export const uploadImages = async (
  folderName: string,
  formData: FormData
): Promise<UploadResponse> => {
  try {
    const folderPath = path.join(UPLOAD_DIR, folderName);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const images: File[] = (formData.getAll("image") || []) as any;
    const responses = await Promise.all(
      images.map(async (image) => {
        if (!image) return;
        const filePath = path.join(folderPath, image.name);
        if (fs.existsSync(filePath)) {
          return { url: image.name };
        }
        const buffer = Buffer.from(await image.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        return { url: image.name };
      })
    );

    return {
      data: responses.filter(Boolean) as ImageType[],
    };
  } catch (error) {
    console.log("Error uploading image", error);
    return { error: "Error uploading image" };
  }
};

export const deleteImage = async (
  folderName: string,
  key: string
): Promise<OtherResponse> => {
  try {
    const filePath = path.join(UPLOAD_DIR, folderName, key);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return { data: true };
  } catch (error) {
    console.log("Error deleting image", error);
    return { error: "Error deleting image" };
  }
};

export const updateImage = async (
  folderName: string,
  existingKey: string,
  formData: FormData
): Promise<UploadResponse> => {
  const deleteResponse = await deleteImage(folderName, existingKey);
  if (deleteResponse.error) {
    return { error: deleteResponse.error };
  }
  const uploadResponse = await uploadImages(folderName, formData);
  return uploadResponse;
};
