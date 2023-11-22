import Logo from "../assets/img/Logos/Blubbysoft.png";
import React, { useState, useEffect } from 'react';
import Home from "../assets/img/Icons/Home.svg";
import Sopport from "../assets/img/Icons/Sopport.svg";
import Notification from "../assets/img/Icons/Notificationn.png";
import Avatar from "../assets/img/Icons/Avatar2.png";

function SliderBoard({ onSidebarItemClick, user }) {

    const [selectedProfileImage, setSelectedProfileImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!user) {
            setSelectedProfileImage();
        }
    }, []);

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
            const isConfirmed = window.confirm("¿Deseas subir esta imagen?");
            if (isConfirmed) {
                uploadImageToAPI(file);
            }
        }
    };

    const uploadImageToAPI = (imageFile) => {
        const apiUrl = 'https://apiweb.blubbysoft.site/users/updateimg';
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('email', "ejemplo@ejemplo.com")
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
            .then(data => {
                console.log('Imagen subida exitosamente:', data);
            })
            .catch(error => {
                console.error('Error al subir la imagen:', error);
            });
    };

    return (
        <>
            <nav className={`lg:w-80 ${isOpen ? "w-80 fixed z-10" : "hidden"} bg-white lg:grid lg:static grid place-content-between grid-cols-1 w-80 min-h-screen p-10 rounded-r-lg text-center shadow-lg transition-all duration-300`}>
                <div className="grid place-items-center gap-14">
                    <div>
                        <img className="h-full object-cover w-20" src={Logo} alt="" />
                    </div>
                    <div className="grid place-items-start gap-8 text-violet-700 font-medium text-lg">
                        <button className="hover:transform hover:scale-105 hover:text-black rounded-full" onClick={() => onSidebarItemClick('Home')}>
                            <span><img className="w-5 h-5 mr-4 inline-block align-center" src={Home} alt="" />Inicio</span>
                        </button>
                        <button className="hover:transform hover:scale-105 hover:text-black rounded-full">
                            <span><img className="w-5 h-5 mr-4 inline-block align-center" src={Notification} alt="" />Notificaciones</span>
                        </button>
                        <button className="hover:transform hover:scale-105 hover:text-black rounded-full" onClick={() => onSidebarItemClick('Repport')}>
                            <span><img className="w-5 h-5 mr-4 inline-block align-center" src={Sopport} alt="" />Soporte</span>
                        </button>
                    </div>
                </div>
                {/**Imagen */}
                <div className="grid grid-cols place-items-center">
                    <div className="rounded-full border-4 border-slate-700 mb-5">
                        {selectedProfileImage ? (
                            <img className="h-14 object-cover object-top w-14 rounded-full" src={selectedProfileImage} alt="" />
                        ) : (
                            <img className="h-14 object-cover object-center w-14 rounded-full" src={Avatar} alt="" />
                        )}
                    </div>
                    <div>
                        <h1 className="text-blue-800 font-medium text-lg">Ana Robles</h1>
                    </div>
                    <div>
                        <input type="file" accept="image/*" onChange={handleProfileImageChange} style={{ display: 'none' }} id="profile-image-input" />
                        <label htmlFor="profile-image-input" className="text-blue-800 font-medium cursor-pointer text-sm">Seleccionar o cambiar foto</label>
                    </div>
                </div>
            </nav>
            <div className="lg:hidden" style={{ zIndex: isOpen ? "49" : "auto" }}>
                <button className="ml-4 mt-4" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default SliderBoard;
