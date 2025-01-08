"use client"

import Link from 'next/link';
import NavLinks from './nav-link';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useFont } from '@/context/fontContext';

export default function SideNav() {
    const { size } = useFont();
    function normalizePathname(pathname: string): string {
        try {
            // Ensure the pathname starts with a slash
            if (!pathname.startsWith('/')) {
                pathname = '/' + pathname;
            }
            // Remove trailing slash if it exists (except for root)
            return pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;
        } catch (error) {
            console.error('Error normalizing pathname:', error);
            return '/';
        }
    }

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link href="/" className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-700 p-4 md:h-40">
                <div className="w-32 text-white md:w-40">
                    <Image
                        src="/BORNEENSIS+.png"
                        width={1000}
                        height={1000}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                        priority
                    />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-card md:block"></div>
            </div>
            {/* Settings Link */}
            <Link
                    href={normalizePathname("/settingsPage")}
                    className="mt-2 flex items-center justify-center gap-2 rounded-md bg-card p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2"
                >
                    <Cog6ToothIcon className="w-6" />
                    <p 
                    className ="hidden md:block"
                    style={{ fontSize: size }}
                    >Settings</p>
                </Link>
        </div>
    );
}