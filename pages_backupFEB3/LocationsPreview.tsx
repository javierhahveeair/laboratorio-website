export default function LocationsPreview() {
    const locations = [
        {
            name: "Fajardo",
            address: "Calle Principal 123",
            phone: "(787) 123-4567"
        },
        {
            name: "Fajardo II",
            address: "Calle Secundaria 456",
            phone: "(787) 234-5678"
        },
        {
            name: "Luquillo",
            address: "Calle Playa 789",
            phone: "(787) 345-6789"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Nuestras Localidades
                    </h2>
                    <p className="text-xl text-blue-800">
                        Encuentre la localidad más cercana a usted
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {locations.map((location) => (
                        <div
                            key={location.name}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{location.name}</h3>
                            <p className="text-blue-800 mb-2">{location.address}</p>
                            <p className="text-blue-800">{location.phone}</p>
                            <a
                                href={`/locations#${location.name.toLowerCase()}`}
                                className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                            >
                                Ver detalles →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
