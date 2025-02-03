// src/types/google-maps.d.ts

declare namespace google.maps {
    class Map {
        constructor(mapDiv: Element | null, opts?: MapOptions)
        setCenter(latLng: LatLng | LatLngLiteral): void
    }

    class Marker {
        constructor(opts?: MarkerOptions)
        setMap(map: Map | null): void
        addListener(eventName: string, handler: () => void): MapsEventListener
    }

    interface MapOptions {
        zoom?: number
        center?: LatLng | LatLngLiteral
        styles?: MapTypeStyle[]
    }

    interface LatLngLiteral {
        lat: number
        lng: number
    }

    interface MarkerOptions {
        position: LatLng | LatLngLiteral
        map: Map
        title?: string
    }

    interface MapTypeStyle {
        featureType?: string
        elementType?: string
        stylers: object[]
    }

    interface MapsEventListener {
        remove(): void
    }
}

interface Window {
    google: typeof google
}
