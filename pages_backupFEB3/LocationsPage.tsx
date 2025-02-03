'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { motion } from 'framer-motion'

interface Location {
    id: string
    name: string
    address: string
    phone: string
    hours: string
    coordinates: {
        lat: number
        lng: number
    }
    services: string[]
}

const locations: Location[] = [
    {
        id: 'fajardo',
        name: 'Fajardo',
        address: 'Calle Principal 123, Fajardo, PR 00738',
        phone: '(787) 123-4567',
        hours: 'Lunes a Viernes: 6:00 AM - 3:00 PM\nSábado: 7:00 AM - 11:00 AM',
        coordinates: {
            lat: 18.3258,
            lng: -65.6525
        },
        services: [
            'Pruebas de rutina',
            'Análisis de sangre',
            'Pruebas de COVID-19',
            'Pruebas de embarazo'
        ]
    },
    {
        id: 'fajardo-2',
        name: 'Fajardo II',
        address: 'Calle Secundaria 456, Fajardo, PR 00738',
        phone: '(787) 234-5678',
        hours: 'Lunes a Viernes: 7:00 AM - 4:00 PM\nSábado: 7:00 AM - 12:00 PM',
        coordinates: {
            lat: 18.3288,
            lng: -65.6545
        },
        services: [
            'Pruebas especializadas',
            'Análisis hormonales',
            'Pruebas genéticas',
            'Pruebas de alergias'
        ]
    },
    {
        id: 'luquillo',
        name: 'Luquillo',
        address: 'Calle Playa 789, Luquillo, PR 00773',
        phone: '(787) 345-6789',
        hours: 'Lunes a Viernes: 6:30 AM - 3:30 PM\nSábado: 7:00 AM - 11:00 AM',
        coordinates: {
            lat: 18.3744,
            lng: -65.7147
        },
        services: [
            'Pruebas de rutina',
            'Análisis de sangre',
            'Pruebas de COVID-19',
            'Servicios a domicilio'
        ]
    }
]

export default function LocationsPage() {
    const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0])
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [markers, setMarkers] = useState<google.maps.Marker[]>([])

    // Initialize map after Google Maps script is loaded
    const initializeMap = () => {
        if (!window.google) return

        const newMap = new window.google.maps.Map(
            document.getElementById('map') as HTMLElement,
            {
                zoom: 12,
                center: selectedLocation.coordinates,
                styles: [
                    {
                        featureType: 'all',
                        elementType: 'geometry',
                        stylers: [{ color: '#f5f5f5' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#c9c9c9' }]
                    }
                ]
            }
        )

        setMap(newMap)

        // Add markers for all locations
        const newMarkers = locations.map(location => {
            const marker = new window.google.maps.Marker({
                position: location.coordinates,
                map: newMap,
                title: location.name
            })

            marker.addListener('click', () => {
                setSelectedLocation(location)
                newMap.setCenter(location.coordinates)
            })

            return marker
        })

        setMarkers(newMarkers)
    }

    // Clean up markers when component unmounts
    useEffect(() => {
        return () => {
            markers.forEach(marker => {
                marker.setMap(null)
            })
        }
    }, [markers])

    // Update map center when selected location changes
    useEffect(() => {
        if (map) {
            map.setCenter(selectedLocation.coordinates)
        }
    }, [selectedLocation, map])

    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                onLoad={initializeMap}
            />

            {/* Hero Section */}
            <section className="bg-blue-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Nuestras Localidades
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Encuentre la localidad más cercana a usted. Estamos presentes en
                            Fajardo y Luquillo para servirle mejor.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Locations and Map Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Location Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {locations.map((location) => (
                                <motion.div
                                    key={location.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer 
                                              transition-all duration-200 hover:shadow-lg
                                              ${selectedLocation.id === location.id ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={() => setSelectedLocation(location)}
                                >
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                        {location.name}
                                    </h3>
                                    <p className="text-gray-600 mb-2">{location.address}</p>
                                    <p className="text-blue-800 font-medium mb-2">{location.phone}</p>
                                    <div className="text-sm text-gray-500 whitespace-pre-line">
                                        {location.hours}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map and Selected Location Details */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Map Container */}
                            <div
                                id="map"
                                className="w-full h-96 rounded-lg shadow-md bg-gray-200"
                            />

                            {/* Selected Location Details */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                    Servicios en {selectedLocation.name}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedLocation.services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2"
                                        >
                                            <svg
                                                className="w-5 h-5 text-blue-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        ¿Necesita más información?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Estamos aquí para responder todas sus preguntas.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md
                                 text-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Contáctenos
                    </a>
                </div>
            </section>
        </>
    )
}
