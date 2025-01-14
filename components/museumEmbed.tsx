import React from 'react';

export default function MuseumEmbed() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://digital-museum-phi.vercel.app"
        title="Digital Museum"
        className="w-full h-screen border"
        allowFullScreen
      />
    </div>
  );
}
