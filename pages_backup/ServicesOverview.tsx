'use client'

import { motion } from 'framer-motion'

export default function ServicesOverview() {
    const services = [
        {
            title: "Análisis Clínicos",
            description: "Pruebas rápidas y confiables de sangre y orina.",
            icon: "/icons/microscope.png"
        },
        {
            title: "Pruebas Genéticas",
            description: "Diagnóstico avanzado para prevenir enfermedades hereditarias.",
            icon: "/icons/dna.png"
        },
        {
            title: "Microbiología",
            description: "Exámenes detallados para identificar infecciones.",
            icon: "/icons/bacteria.png"
        },
        {
            title: "Inmunología",
            description: "Análisis especializados para alergias y defensas inmunitarias.",
            icon: "/icons/immunity.png"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Nuestros servicios: Análisis clínicos
                    </h2>
                    <h3 className="text-2xl text-blue-800">
                        de precisión para tu bienestar.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-blue-800 mb-4">
                                {service.description}
                            </p>
                            <a
                                href="/services"
                                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
                            >
                                Ver todos los servicios
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
