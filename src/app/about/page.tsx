'use client';

import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => router.push('/')} className="text-blue-200">
        Go to home
      </button>
    </div>
  );
}
