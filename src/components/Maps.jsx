import { useEffect, useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
function Maps() {
    const mapRef = useRef(null);

    useEffect(() => {
        Aos.init();
    }, []);
    useEffect(() => {
        const google = window.google;
        const mapNode = mapRef.current;
        const map = new google.maps.Map(mapNode, {
            center: { lat: 16.622619667055645, lng: -93.09873752202292 },
            zoom: 13
        });
        const marker = new google.maps.Marker({
            position: { lat: 16.622619667055645, lng: -93.09873752202292 },
            map: map,
            title: "Suchiapa",
        })
        const marker2 = new google.maps.Marker({
            position: { lat: 16.632899866385802, lng: -93.09736423106949 },
            map: map,
            title: "Gasolinera",
        })

    })

    return (
        <>
            <div className="h-auto grid place-items-center p-5 bg-gray-800">
                <div>
                    <h1 className='text-5xl font-bold text-center text-white mb-10'>GEOLOCATION</h1>
                </div>
                <div ref={mapRef} className="h-96 w-full" data-aos="zoom-in-up" data-aos-duration="2000">
                </div>
            </div>
        </>
    );
}
export default Maps;


