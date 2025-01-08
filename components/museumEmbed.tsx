import React from 'react';

export default function MuseumEmbed() {
  return (
    <div className="w-full h-[80vh] bg-background border border-gray-700 shadow-lg mt-4 rounded-md overflow-hidden">
      <iframe
        className="w-full h-full border-0"
        src="https://digital-museum-phi.vercel.app"
        title="Digital Museum"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
}
