'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative min-h-[100vh] lg:min-h-[65vh]">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="absolute inset-0 opacity-5"
                     style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                     }}
                />
            </div>

            {/* Mobile Image */}
            <div className="relative lg:hidden w-full h-48 sm:h-64">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/lab-hero.jpeg"
                        alt="Laboratorio Clínico Fajardo"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
                {/* Content Section */}
                <div className="z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 lg:space-y-8"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            <span className="block">Laboratorio clínico</span>
                            <span className="block">de confianza en la</span>
                            <span className="block">costa este de</span>
                            <span className="block">Puerto Rico</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl leading-relaxed">
                            Somos un laboratorio clínico familiar comprometido con tu bienestar.
                            Con ubicaciones en Fajardo y Luquillo, ofrecemos análisis de alta
                            precisión y un servicio cálido y profesional.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <a
                                href="/locations"
                                className="w-full sm:w-auto text-center inline-flex items-center justify-center
                                         px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg
                                         hover:bg-gray-100 transition-colors duration-200
                                         text-base lg:text-lg shadow-lg hover:shadow-xl"
                            >
                                Visítanos
                            </a>
                            <a
                                href="/contact"
                                className="w-full sm:w-auto text-center inline-flex items-center justify-center
                                         px-8 py-3 border-2 border-white text-white font-semibold
                                         rounded-lg hover:bg-white hover:text-blue-900
                                         transition-colors duration-200 text-base lg:text-lg"
                            >
                                Contáctanos
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Desktop Image Section */}
                <div className="hidden lg:block relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <div className="relative h-full">
                            <Image
                                src="/images/lab-hero.jpeg"
                                alt="Laboratorio Clínico Fajardo"
                                fill
                                priority
                                className="object-cover"
                                sizes="50vw"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-blue-900/40" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
