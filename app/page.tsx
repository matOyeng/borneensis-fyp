export default function MuseumPage() {
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Museum Page</h1>
      <div className="relative w-full max-w-screen-lg h-screen border border-gray-600 shadow-md rounded-md overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://digital-museum-phi.vercel.app"
          title="Digital Museum"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}