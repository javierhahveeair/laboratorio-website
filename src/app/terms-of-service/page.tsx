export default function TermsOfServicePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Términos de Servicio
            </h1>
            <div className="prose max-w-none">
                <p className="text-gray-600">
                    Última actualización: {new Date().toLocaleDateString('es')}
                </p>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        1. Aceptación de los Términos
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Al utilizar los servicios de Laboratorio Clínico, usted acepta
                        estos términos de servicio en su totalidad. Por favor, lea estos
                        términos cuidadosamente antes de utilizar nuestros servicios.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        2. Descripción del Servicio
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Proporcionamos servicios de laboratorio clínico, incluyendo pero
                        no limitado a:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li className="mb-2">Análisis de sangre y otros fluidos corporales</li>
                        <li className="mb-2">Pruebas diagnósticas</li>
                        <li className="mb-2">Servicios de laboratorio general</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        3. Responsabilidades del Cliente
                    </h2>
                    <p className="text-gray-600 mb-4">
                        El cliente se compromete a:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li className="mb-2">Proporcionar información precisa y completa</li>
                        <li className="mb-2">Seguir las instrucciones para la toma de muestras</li>
                        <li className="mb-2">Cumplir con las citas programadas</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        4. Política de Pagos y Cancelaciones
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Nos reservamos el derecho de modificar nuestras tarifas y políticas
                        de cancelación. Las cancelaciones deben realizarse con al menos 24
                        horas de anticipación.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        5. Limitación de Responsabilidad
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Si bien nos esforzamos por proporcionar servicios precisos y
                        confiables, no podemos garantizar que los resultados estén libres
                        de error. Nuestra responsabilidad se limita al costo del servicio
                        proporcionado.
                    </p>
                </section>
            </div>
        </div>
    )
}
