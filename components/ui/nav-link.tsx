"use client";

import {
  MapIcon,
  HomeIcon,
  BugAntIcon,
  PhotoIcon,
  BookOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useFont } from '@/context/fontContext'; 

const links = [
  { name: 'Borneensis Museum', href: '/', icon: HomeIcon },
  { name: 'Entomology Map', href: '/entoMap', icon: MapIcon },
  { name: 'Three-D Insect', href: '/threeD', icon: BugAntIcon },
  { name: 'Photo Blog', href: '/photoBlog', icon: PhotoIcon },
  { name: 'Knowledge Check', href: '/exercise', icon: BookOpenIcon },
  { name: 'About Us', href: '/about', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { size } = useFont(); // Access the global font size

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-card p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p
              className="hidden md:block"
              style={{ fontSize: size }} // Apply the dynamic font size here
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
