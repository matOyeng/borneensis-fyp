import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <p>Entomology Mapping Tools Page</p>
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 border border-gray-300 shadow-md mt-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/d/u/0/embed?mid=1hdgVs4JVQhk-jA9H_Mb0xf_nuRI6aaU&ehbc=2E312F"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0} // Fixed type issue by using a numeric value
        ></iframe>
      </div>
    </div>
  );
}
