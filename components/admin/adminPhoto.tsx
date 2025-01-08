'use client'; // Make this a Client Component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Define the callback URL to return to after signing in
    const signInUrl = `https://exif-photo-blog-nsn8.vercel.app/sign-in?callbackUrl=https%3A%2F%2Fexif-photo-blog-nsn8.vercel.app%2Fadmin%2Fphotos`;
    
    // Redirect to the external sign-in page
    router.push(signInUrl);
  }, [router]);

  return (
    <div>
      <p>Redirecting to sign-in page...</p>
    </div>
  );
}
