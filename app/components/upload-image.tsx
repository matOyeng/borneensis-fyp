"use client";

import { uploadImage } from "@/supabase/storage/client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "@/lib/utils";

export default function UploadImage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };

  const handleClickUploadImagesButton = async () => {
    startTransition(async () => {
      let urls = [];
      for (const url of imageUrls) {
        const imageFile = await convertBlobUrlToFile(url);
        const { imageUrl, error } = await uploadImage({
          file: imageFile,
          bucket: "dank-pics",
        });
        if (error) {
          console.error(error);
          return;
        }
        urls.push(imageUrl);
      }
      console.log(urls);
      setImageUrls([]);
    });
  };

  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-lg font-bold mb-2">Upload Images</h2>
      <input
        type="file"
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        className="mb-2"
      />
      <button
        onClick={handleClickUploadImagesButton}
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
      >
        {isPending ? "Uploading..." : "Upload Images"}
      </button>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Preview ${index}`} className="w-full h-auto rounded-md" />
        ))}
      </div>
    </div>
  );
}
