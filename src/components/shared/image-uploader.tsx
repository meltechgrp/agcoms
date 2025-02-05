"use client";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { uploadImages, deleteImage } from "@/hooks/use-image-handler";
import { Loader } from "lucide-react";
import { getImageUrl } from "@/lib/utils";

export interface ImageType {
  url: string;
}

interface Props {
  saveImages: (images: ImageType[]) => void;
  className?: string;
  images: ImageType[];
  folderName: string;
}

export default function ImageUploader({
  saveImages,
  images,
  folderName,
}: Props) {
  const [loading, setLoading] = React.useState(false);
  const maxNumber = 20;
  async function handleUpload(imagesD: ImageListType) {
    setLoading(true);
    const formData = new FormData();
    imagesD.forEach((image) => {
      image?.file && formData.append("image", image.file);
    });
    let res = await uploadImages(folderName, formData);
    setLoading(false);
    if (res.error) return toast.error(res.error);
    if (res.data) {
      const prev = [...images, ...res.data];
      res?.data && saveImages(prev);
    }
  }
  async function handleDelete(key: string) {
    setLoading(true);
    const res = await deleteImage(folderName, key);
    setLoading(false);
    if (res.error) return toast.error(res.error);
    toast.success("Image removed successfully");
    saveImages(images.filter((image) => image.url !== key));
  }
  return (
    <div className="grid gap-3">
      <ImageUploading
        multiple
        value={[]}
        onChange={handleUpload}
        maxNumber={maxNumber}
      >
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          <div className="grid gap-4">
            <div className="flex gap-3">
              <Button
                size={"sm"}
                type="button"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                disabled={loading}
                className="flex gap-1 items-center disabled:opacity-80"
                {...dragProps}
              >
                {loading && <Loader className=" h-4 w-4 animate-spin" />}
                Click or Drop here
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {images &&
                images.map((image, index) => (
                  <div key={index} className="grid gap-1">
                    <img
                      src={getImageUrl(folderName, image.url)}
                      alt=""
                      className="w-[150px] sm:w-[250px] h-100px] sm:h-[150px] object-cover"
                    />
                    <div className="flex gap-3">
                      <Button
                        size={"sm"}
                        type="button"
                        disabled={loading}
                        className="flex gap-1 disabled:opacity-80 items-center"
                        onClick={() => handleDelete(image.url)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
