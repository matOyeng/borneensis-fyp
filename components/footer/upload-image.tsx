"use client";

import { uploadImage } from "@/lib/supabase/storage/client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "@/lib/utils";
import { useFont } from "@/context/fontContext"; // Import useFont context

export default function UploadImage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const { size } = useFont();
  const fontSize = typeof window !== "undefined" ? size : "16px"; // Fallback for SSR

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
        try {
          const imageFile = await convertBlobUrlToFile(url);
          const { imageUrl, error } = await uploadImage({
            file: imageFile,
            bucket: "dank-pics",
          });
          if (error) {
            console.error(error);
            alert("Failed to upload an image. Please try again.");
            continue; // Skip to the next image
          }
          urls.push(imageUrl);
        } catch (err) {
          console.error("An unexpected error occurred:", err);
        }
      }
      console.log(urls);
      setImageUrls([]); // Clear the preview after uploading
    });
  };

  return (
    <div className="p-4 border-t mt-4">
      {/* File Input Wrapper for consistent font styling */}
      <label
        htmlFor="fileInput"
        style={{ fontSize: fontSize }}
        className="block mb-2 font-medium"
      >
        Select Images to Upload
      </label>
      <input
        id="fileInput"
        type="file"
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        style={{ fontSize: fontSize }}
        className="mb-2 border rounded-md px-2 py-1"
      />
      {/* Upload Button */}
      <button
        onClick={handleClickUploadImagesButton}
        disabled={isPending}
        style={{ fontSize: fontSize }}
        className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400"
      >
        {isPending ? "Uploading..." : "Upload Images"}
      </button>
      {/* Preview Section */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Preview ${index}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
