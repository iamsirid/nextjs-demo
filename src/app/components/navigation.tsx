'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href="/"
        className={`/` === pathname ? 'text-blue-500' : 'text-gray-500'}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`/about` === pathname ? 'text-blue-500' : 'text-gray-500'}
      >
        About
      </Link>
      <Link
        href="/products/1"
        className={
          `/products/1` === pathname ? 'text-blue-500' : 'text-gray-500'
        }
      >
        Product 1
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
