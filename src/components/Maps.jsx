import React, { useEffect, useRef, useContext } from "react";
import GraphicContext from "../Context/GraphicContext";

function Maps({ x1, y1, discapacityName }) {

    const mapRef = useRef(null);
    
    const { setGraphic } = useContext(GraphicContext);
    const x2 = [16.63353723836228, 16.631265369278807, 16.619299023949957, 16.61506334829629, 16.626433013101686, 16.62230029981325, 16.621694390704494];
    const y2 = [-93.09581925228562, -93.09732128933395, -93.0980723531495, -93.09051925256365, -93.1011455904523, -93.10490068307315, -93.0996172739899];
    const titles = ["Hotel Ambar Suchiapas", "Gasolinera", "Bodega Aurrera", "Universidad Politecnica de Chiapas", "Mercado Publico 18 de Marzo", "Presidencia Municipal", "Oxxo"];

    // Función para calcular la distancia haversine en kilómetros
    const calcularDistanciaHaversine = (lat1, lon1, lat2, lon2) => {
        const radioTierra = 6371;  // Radio medio de la Tierra en kilómetros
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = radioTierra * c;
        return distancia;
    };

    // Función auxiliar para convertir grados a radianes
    const toRadians = (grados) => {
        return grados * (Math.PI / 180);
    };

    let distance = () => {
        let distanceCalculated = [];
        if (x1 && y1) {
            for (let i = 0; i < x2.length && y2.length; i++) {
                //distanceCalculated[i] = Math.sqrt(Math.pow(x2[i] - x1, 2) + Math.pow(y2[i] - y1, 2));
                // Calcular la distancia en kilómetros
                distanceCalculated = calcularDistanciaHaversine(x1, y1, x2[i], y2[i]);
                setGraphic(distanceCalculated);
            }

        } else {
            return "Sin km";
        }
    };

    useEffect(() => {
        const loadMap = () => {
            const google = window.google;
            const mapNode = mapRef.current;
            const map = new google.maps.Map(mapNode, {
                center: { lat: 16.622619667055645, lng: -93.09873752202292 },
                zoom: 15
            });

            const markersData = [
                { position: { lat: x2[0], lng: y2[0] }, title: titles[0] },
                { position: { lat: x2[1], lng: y2[1] }, title: titles[1] },
                { position: { lat: x2[2], lng: y2[2] }, title: titles[2] },
                { position: { lat: x2[3], lng: y2[3] }, title: titles[3] },
                { position: { lat: x2[4], lng: y2[4] }, title: titles[4] },
                { position: { lat: x2[5], lng: y2[5] }, title: titles[5] },
                { position: { lat: x2[6], lng: y2[6] }, title: titles[6] },
                { position: { lat: x1, lng: y1 }, title: "Pedro" },
            ];

            markersData.forEach(markerData => {
                new google.maps.Marker({
                    position: markerData.position,
                    map: map,
                    title: markerData.title,
                });
            });
        };

        // Verifica si la API de Google Maps ya está cargada
        if (window.google && window.google.maps) {
            loadMap();
            distance();
        } else {
            // Si no está cargada, espera el evento 'load' antes de crear el mapa
            window.addEventListener('load', loadMap);
        }
    }, [x1, y1]);

    return (
        <div className="h-auto p-2">
            <div ref={mapRef} style={{ height: '400px' }} className="w-full"></div>
        </div>
    );
}

export default Maps;
