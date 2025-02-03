export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Política de Privacidad
            </h1>
            <div className="prose max-w-none">
                <p className="text-gray-600">
                    Última actualización: {new Date().toLocaleDateString('es')}
                </p>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        1. Información que Recopilamos
                    </h2>
                    <p className="text-gray-600 mb-4">
                        En Laboratorio Clínico, nos comprometemos a proteger su privacidad y
                        sus datos personales. Esta política describe cómo recopilamos,
                        utilizamos y protegemos su información cuando utiliza nuestros servicios.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        2. Uso de la Información
                    </h2>
                    <p className="text-gray-600 mb-4">
                        La información que recopilamos se utiliza únicamente para:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li className="mb-2">Proporcionar y mejorar nuestros servicios de laboratorio</li>
                        <li className="mb-2">Comunicarnos con usted sobre sus resultados y citas</li>
                        <li className="mb-2">Cumplir con requisitos legales y regulatorios</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        3. Protección de Datos
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Implementamos medidas de seguridad técnicas y organizativas para
                        proteger sus datos personales contra acceso no autorizado,
                        modificación o divulgación.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        4. Sus Derechos
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Usted tiene derecho a:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li className="mb-2">Acceder a sus datos personales</li>
                        <li className="mb-2">Solicitar la rectificación de datos incorrectos</li>
                        <li className="mb-2">Solicitar la eliminación de sus datos</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
