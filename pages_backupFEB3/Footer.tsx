// src/components/layout/Footer.tsx

import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const links = {
        locations: [
            { name: 'Fajardo', href: '/locations#fajardo' },
            { name: 'Fajardo II', href: '/locations#fajardo-2' },
            { name: 'Luquillo', href: '/locations#luquillo' },
        ],
        company: [
            { name: 'Sobre Nosotros', href: '/about' },
            { name: 'Servicios', href: '/services' },
            { name: 'Contáctenos', href: '/contact' },
        ],
        legal: [
            { name: 'Política de Privacidad', href: '/privacy' },
            { name: 'Términos de Servicio', href: '/terms' },
        ],
    }

    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold">Logo</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            Servicios de laboratorio clínico de alta calidad para el cuidado de su salud.
                        </p>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Localidades
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {links.locations.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-600 hover:text-gray-900"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Compañía
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-600 hover:text-gray-900"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                            Contáctenos
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <p className="text-base text-gray-600">
                                    Tel: (787) 123-4567
                                </p>
                            </li>
                            <li>
                                <p className="text-base text-gray-600">
                                    Email: info@laboratorio.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-base text-gray-500">
                            © {currentYear} Laboratorio Clínico. Todos los derechos reservados.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            {links.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
