'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Sobre Nosotros', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Localidades', href: '/locations' },
    ]

    const isCurrentPage = (path: string) => pathname === path

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo - Optimized for both mobile and desktop */}
                    <div className="flex-shrink-0 h-16 -ml-4 sm:-ml-6 lg:-ml-8">
                        <Link href="/" className="relative block h-full cursor-pointer">
                            <Image
                                src="/images/logo-LC.png"
                                alt="Laboratorio Clínico Fajardo - Su laboratorio de confianza en la costa este"
                                width={200}
                                height={60}
                                className="w-[200px] h-[65px] object-cover relative z-10"
                                style={{ marginBottom: '-1px', marginTop: '-1px' }}
                                priority
                                onLoad={() => {
                                    const loadingEl = document.getElementById('logo-loading');
                                    if (loadingEl) loadingEl.style.display = 'none';
                                }}
                                onError={(e) => {
                                    // Fallback to text if image fails to load
                                    const target = e.target as HTMLElement;
                                    target.style.display = 'none';
                                    const fallback = document.createElement('span');
                                    fallback.textContent = 'Laboratorio Clínico';
                                    fallback.className = 'text-xl font-bold text-blue-900';
                                    target.parentElement?.appendChild(fallback);
                                    // Hide loading state on error too
                                    const loadingEl = document.getElementById('logo-loading');
                                    if (loadingEl) loadingEl.style.display = 'none';
                                }}
                            />
                            {/* Loading state - shown while image loads */}
                            <div className="absolute inset-0 bg-gray-100 animate-pulse"
                                 aria-hidden="true"
                                 id="logo-loading" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-2 lg:px-3 py-2 text-sm font-medium ${
                                    isCurrentPage(item.href)
                                        ? 'text-black'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-black text-white px-3 lg:px-4 py-2 rounded-md text-sm
                                     font-medium hover:bg-gray-800 transition-colors"
                        >
                            Contáctenos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute w-full bg-white z-50 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-4 text-base font-medium ${
                                    isCurrentPage(item.href)
                                        ? 'text-black'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block w-full mt-4 px-3 py-4 text-base font-medium text-white
                                     bg-black rounded-md hover:bg-gray-800 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contáctenos
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
