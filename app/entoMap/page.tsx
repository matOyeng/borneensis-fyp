// Import necessary components and styles
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

// Embla carousel configuration
const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const targetIndexFor3DModel = 5; // Index where the 3D model should appear

export default function EntoMapPage() {
  return (
    <div className="flex flex-col items-center">

      {/* Main content */}
      <p>Entomology Mapping Tools Page</p>

      {/* Google Maps Iframe */}
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 border border-gray-300 shadow-md mt-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/d/u/0/embed?mid=1hdgVs4JVQhk-jA9H_Mb0xf_nuRI6aaU&ehbc=2E312F"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0} // Fix for type issue by using a numeric value
        ></iframe>
      </div>

    </div>
  );
}
