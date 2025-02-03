export default function ContactCTA() {
    return (
        <section className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    ¿Listo para visitarnos?
                </h2>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                    Estamos aquí para atenderle y responder todas sus preguntas.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/locations"
                        className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Ver Localidades
                    </a>
                    <a
                        href="/contact"
                        className="inline-block border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
                    >
                        Contáctenos
                    </a>
                </div>
            </div>
        </section>
    )
}
