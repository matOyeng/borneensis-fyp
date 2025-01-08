import React from 'react';
import EntoMap from '../../components/entoMap';

export default function EntoMapPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-1">Entomology Map</h1>
      <EntoMap />
    </div>
  );
}
