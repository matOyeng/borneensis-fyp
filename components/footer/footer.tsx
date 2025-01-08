"use client";

import UploadImage from "./upload-image";
import CreateFeedback from "./create-feedback";
import { useFont } from "@/context/fontContext";

export default function Footer() {
  const { size } = useFont();
  const fontSize = typeof window !== "undefined" ? size : "16px"; // Default size for SSR

  return (
    <footer className="bg-blue-600 dark:bg-blue-700 text-white p-4 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ fontSize }}>
            Upload Your Images
          </h2>
          <UploadImage />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ fontSize }}>
            Your Feedback Matters
          </h2>
          <CreateFeedback />
        </div>
      </div>
      <div className="text-center mt-4 border-t pt-4">
        <p style={{ fontSize }}>
          &copy; {new Date().getFullYear()} Borneensis+. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
