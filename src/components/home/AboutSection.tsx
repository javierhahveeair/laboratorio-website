import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-20 bg-blue-900"> {/* Added blue background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6"> {/* Changed to white */}
                            Más de dos décadas de excelencia en análisis clínicos
                        </h2>
                        <p className="text-lg text-gray-200 mb-6"> {/* Light gray for better readability */}
                            Nuestro compromiso con la calidad y la precisión nos ha convertido
                            en uno de los laboratorios más confiables de la región.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Personal altamente calificado',
                                'Tecnología de última generación',
                                'Resultados precisos y rápidos',
                                'Atención personalizada'
                            ].map((item) => (
                                <li key={item} className="flex items-center">
                                    <span className="text-blue-300 mr-2">✓</span> {/* Light blue checkmark */}
                                    <span className="text-gray-200">{item}</span> {/* Light gray text */}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="/about"
                            className="inline-block mt-8 text-blue-900 border-2 border-white px-6 py-2 rounded-md bg-white transition-colors"
                        >
                            Conozca nuestra historia
                        </a>
                    </div>
                    <div className="relative h-96 bg-blue-800 rounded-lg overflow-hidden">
                        <Image
                            src="/api/placeholder/800/600"
                            alt="Foto de Laboratorio/Historia aqui 📸🥼🔬🧫👩‍🔬👨‍🔬"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
