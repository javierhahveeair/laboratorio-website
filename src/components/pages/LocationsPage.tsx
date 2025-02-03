'use client'

import { useState, useEffect, useCallback } from 'react'
import Script from 'next/script'
import { motion } from 'framer-motion'
import { Alert, AlertDescription } from './Alert'

// Get the API key from the environment
const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

// Debug log (will only show in development)
if (process.env.NODE_ENV === 'development') {
    console.log('Maps API Key Status:', {
        exists: !!MAPS_API_KEY,
        length: MAPS_API_KEY?.length || 0
    })
}

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

const LocationCard = ({ location, isSelected, onClick }: {
    location: Location,
    isSelected: boolean,
    onClick: () => void
}) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-lg shadow-md p-6 cursor-pointer 
                   transition-all duration-200 hover:shadow-lg
                   ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
        onClick={onClick}
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
)

export default function LocationsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [mapError, setMapError] = useState<string | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0])
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [markers, setMarkers] = useState<google.maps.Marker[]>([])
    const [mapsLoaded, setMapsLoaded] = useState(false)

    const initializeMap = useCallback(() => {
        if (!window.google?.maps) {
            console.error('Google Maps not available')
            setMapError('Google Maps no está disponible')
            return
        }

        const mapElement = document.getElementById('map')
        if (!mapElement) {
            console.error('Map element not found')
            setMapError('Error al cargar el mapa')
            return
        }

        try {
            const newMap = new window.google.maps.Map(mapElement, {
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
            })

            setMap(newMap)

            // Clear existing markers
            markers.forEach(marker => marker.setMap(null))

            const newMarkers = locations.map(location => {
                const marker = new google.maps.Marker({
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
            setMapError(null)
            setMapsLoaded(true)
        } catch (error) {
            console.error('Map initialization error:', error)
            setMapError('Error al inicializar el mapa')
        }
    }, [selectedLocation.coordinates, markers])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (map && mapsLoaded) {
            map.setCenter(selectedLocation.coordinates)
        }
    }, [selectedLocation, map, mapsLoaded])

    useEffect(() => {
        return () => {
            markers.forEach(marker => marker.setMap(null))
        }
    }, [markers])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
                    <p className="mt-4 text-blue-900">Cargando...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            {MAPS_API_KEY ? (
                <Script
                    src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`}
                    strategy="afterInteractive"
                    onLoad={() => {
                        console.log('Google Maps script loaded')
                        initializeMap()
                    }}
                    onError={(e) => {
                        console.error('Google Maps script error:', e)
                        setMapError('Error al cargar Google Maps')
                    }}
                />
            ) : (
                <Alert variant="destructive" className="mb-6">
                    <AlertDescription>
                        Error de configuración: Se requiere una llave de API de Google Maps
                    </AlertDescription>
                </Alert>
            )}

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

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {mapError && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertDescription>{mapError}</AlertDescription>
                        </Alert>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            {locations.map((location) => (
                                <LocationCard
                                    key={location.id}
                                    location={location}
                                    isSelected={selectedLocation.id === location.id}
                                    onClick={() => setSelectedLocation(location)}
                                />
                            ))}
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <div
                                id="map"
                                className="w-full h-96 rounded-lg shadow-md bg-gray-200"
                            />

                            <motion.div
                                key={selectedLocation.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                    Servicios en {selectedLocation.name}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedLocation.services.map(service => (
                                        <div
                                            key={service}
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
