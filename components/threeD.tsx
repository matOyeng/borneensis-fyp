"use client";

import React from "react";
import { useFont } from '@/context/fontContext';

const models = [
  { id: "ddb670ee2bdb43cf899a42c163e261fa", title: "Xylotrupes Gideon / Brown Rhinoceros Beetle" },
  { id: "59fa16902b924d26bde9e626c76bb28d", title: "Graphosoma Lineatum / Shild Bug" },
  { id: "6e333df5ef494ec2ab7d18019831cd01", title: "Cicada Exoskeleton" },
  { id: "05100fd5213b47f898b3b3f2cba5e747", title: "Cicada Pomponia (Largest on Earth)" },
  { id: "a6a0c0a7944f4cffad3b66de56bcebcd", title: "Heteropteryx / Malayan Jungle Nymph" },
  { id: "dbb33dd9d5d746a1a0b36e1c059b6b3d", title: "Deltochilum / Dung beetle" },
  { id: "21271539e3f944799df45e1e69e2b568", title: "Apis / Honey Bee" },
  { id: "0cff43d6c8c14a058c3c8ed16e8bcb58", title: "Cryptocephalus Sericeus / Leaf Beetle" },
  { id: "4c23e2622a8749979f49ad1632cab94d", title: "Leptinotarsa Decemlineata / Colorado Potato Beetle" },
  { id: "160b7f0524d144d897ccbe9d28e1d6e3", title: "Pyrops Pyrorhynchus / Lanternfly" },
  { id: "2715b35c42d84d1b9ce43d8cab249eaa", title: "Leafcutter Ant" },
];

const SketchfabGallery = () => {
  const { size } = useFont(); // Get the font size from context

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-semibold mb-5 text-center">Three-Dimensional Insects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {models.map((model) => (
          <div
            key={model.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title={model.title}
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              src={`https://sketchfab.com/models/${model.id}/embed`}
              style={{ width: "100%", height: "300px" }}
            ></iframe>
            <div style={{ padding: "10px" }}>
              <h2 style={{ fontSize: size, margin: "0 0 10px" }}>{model.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SketchfabGallery;
