'use client'; // Make this a Client Component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Define the callback URL to return to after signing in
    const callbackUrl = encodeURIComponent('http://localhost:3000/admin');
    const signInUrl = `https://exif-photo-blog-h4gc.vercel.app/sign-in?callbackUrl=${callbackUrl}`;
    
    // Redirect to the external sign-in page
    router.push(signInUrl);
  }, [router]);

  return (
    <div>
      <p>Redirecting to sign-in page...</p>
    </div>
  );
}
