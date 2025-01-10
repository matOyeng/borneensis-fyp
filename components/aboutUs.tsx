"use client";

import Image from 'next/image';
import { useFont } from "@/context/fontContext";

export default function AboutUs() {
  const { size } = useFont();
  const fontSize = typeof window !== "undefined" ? size : "16px"; // Default size for SSR
return (
<div className="min-h-screen bg-card py-10 px-5">
<div className="max-w-5xl mx-auto bg-background shadow-lg rounded-lg overflow-hidden">
<header className="bg-blue-600 text-white text-center py-5">
<h1 className="text-3xl font-semibold mb-1">About Us</h1>
</header>

<div className="p-8">
{/* Logos Section */}
<div className="flex justify-center items-center gap-10 my-6">
<div className="w-24 h-24 relative">
<Image src="/upm.png" alt="UPM Logo" layout="fill" objectFit="contain" />
</div>
<div className="w-40 h-40 relative">
<Image src="/BORNEENSIS+.png" alt="System Logo" layout="fill" objectFit="contain" />
</div>
<div className="w-24 h-24 relative">
<Image src="/ums.png" alt="ITBC Logo" layout="fill" objectFit="contain" />
</div>
</div>

{/* Developer Information */}
<div className="text-center my-8">
<h2 className="text-2xl font-semibold">Developer Name: <span className="text-blue-600" >Muhammad Aqil Bin Z.Azaman</span></h2>
<h2 className="text-2xl font-semibold">Supervisor Name: <span className="text-blue-600">Ts. Dr. Sufri muhammad</span></h2>
<p className="text-lg mt-2">Bachelor of Software Engineering from University of Putra Malaysia</p>
</div>

{/* Project Description */}
<div className="my-8">
<h3 className="text-xl font-semibold text-gray-800 dark:text-white" >Project Description</h3>
<p className="text-gray-600 dark:text-white mt-4" style={{ fontSize }}>
            The Borneensis+ project, a collaboration between UPM and UMS, 
            modernizes the Borneensis Museum through a virtual platform featuring interactive experiences, 
            entomology mapping, 3D insect models, knowledge quizzes, and community participation. 
            Built with Next.js, Unity, and Supabase, it provides remote access to Sabah insect biodiversity while promoting inclusivity with accessibility features and citizen science initiatives.
</p>
</div>

{/* Collaboration Details */}
<div className="my-8">
<h3 className="text-xl font-semibold text-gray-800 dark:text-white">Collaboration</h3>
<p className="text-gray-600 dark:text-white mt-4" style={{ fontSize }}>
              This project has been developed in close collaboration with Dr. Mohamad Syahrul Nizam Ibrahim , beginning in April 2024. Together,
              we have aimed to bring innovative solutions to life, combining technical expertise and visionary leadership.
</p>
</div>
</div>
</div>
</div>
  );
}