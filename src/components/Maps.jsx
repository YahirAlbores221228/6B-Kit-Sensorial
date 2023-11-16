import { useEffect, useRef } from "react";


function Maps() {
    const mapRef = useRef(null);


    useEffect(() => {
        const google = window.google;
        const mapNode = mapRef.current;
        const map = new google.maps.Map(mapNode, {
            center: { lat: 16.622619667055645, lng: -93.09873752202292 },
            zoom: 15
        });

        const markersData = [
            { position: { lat: 16.634308210606378, lng: -93.09584073611487 }, title: "Hotel Ambar Suchiapa" },
            { position: { lat: 16.632899866385802, lng: -93.09736423106949 }, title: "Gasolinera" },
            { position: { lat: 16.619216799755375, lng: -93.09814743606644 }, title: "Bodega Aurrera" },
            { position: { lat: 16.616225105259904, lng: -93.09031538609771 }, title: "Universidad Politecnica de Chiapas" },
            { position: { lat: 16.626479946451912, lng: -93.10108713661728 }, title: "Mercado Publico 18 de Marzo" },
            { position: { lat: 16.62247060004279, lng: -93.10464911016963 }, title: "Presidencia Municipal" },
            { position: { lat: 16.621961715473436, lng: -93.09970311721386 }, title: "Oxxo" },
        ];

        markersData.forEach(markerData => {
            new google.maps.Marker({
                position: markerData.position,
                map: map,
                title: markerData.title,
            });
        });
    });

    return (
        <div className="h-auto p-2">
            <div ref={mapRef} style={{ height: '400px' }} className="w-full">
            </div>
        </div>

    );
}

export default Maps;


