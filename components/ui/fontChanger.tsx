"use client";

import { Inter } from "next/font/google";
import { useFont } from "@/context/fontContext";

const inter = Inter({ subsets: ["latin"] });

export default function FontChanger() {
  const { size, increaseFontSize, decreaseFontSize } = useFont();

  return (
    <>
      <div className="flex items-center gap-4">
      <div
        className="text-base font-medium text-gray-700 dark:text-gray-300 mt-10"
        style={{ fontSize: size }}
      >
        Font Size Changer:
      </div>

        <ul className="flex items-center justify-center gap-4 mt-10">
          <li>
            <button
              onClick={decreaseFontSize}
              className="py-2 px-6 rounded shadow bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Decrease Font Size
            </button>
          </li>
          <li>
            <button
              onClick={increaseFontSize}
              className="py-2 px-6 rounded shadow bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Increase Font Size
            </button>
          </li>
        </ul>

        <p className="mt-10" style={{ fontSize: size }}>
          The current font size is{" "}
          <span className="font-bold text-3xl" style={{ fontSize: size }}>{size} px</span>
        </p>
      </div>
    </>
  );
}
