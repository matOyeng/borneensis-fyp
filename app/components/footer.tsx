"use client";

import UploadImage from "@/app/components/upload-image";
import CreateFeedback from "./create-feedback";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold">Upload Your Images</h2>
          <UploadImage />
        </div>
        <div>
          <CreateFeedback />
        </div>
      </div>
      <div className="text-center mt-4 border-t pt-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}