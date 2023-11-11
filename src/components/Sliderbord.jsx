import Logo from "../assets/img/Logos/Blubbysoft.png"
import React, { useState } from 'react';
import Home from "../assets/img/Icons/Home.svg"
import Sopport from "../assets/img/Icons/Sopport.svg"
import Notification from "../assets/img/Icons/Notificationn.png"
import Avatar from "../assets/img/Icons/Avatar2.png"

function SliderBoard({ onSidebarItemClick }) {
    const [selectedProfileImage, setSelectedProfileImage] = useState(null);

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <nav className="grid place-content-between grid-cols-1 w-80 h-screen sticky p-10 rounded-r-lg text-center shadow-lg">
            {/* Datos del button */}
            <div className="grid place-items-center gap-14">
                {/**Logo */}
                <div>
                    <img className="h-full object-cover w-24" src={Logo} alt="" />
                </div>
                {/**Button de navegacion */}
                <div className="grid place-items-start gap-8 text-violet-700 font-medium text-lg">
                    <button className="hover:transform hover:scale-105 hover:text-black   rounded-full" onClick={() => onSidebarItemClick('Home')}> <span><img className="w-5 h-5 mr-4  inline-block align-center" src={Home} alt="" /></span>Home</button>
                    <button className="hover:transform hover:scale-105 hover:text-black  rounded-full"> <span><img className="w-5 h-5 mr-4  inline-block align-center" src={Notification} alt="" /></span>Notifications</button>
                    <button className="hover:transform hover:scale-105 hover:text-black  rounded-full " onClick={() => onSidebarItemClick('Repport')}> <span><img className="w-5 h-5 mr-4  inline-block align-center" src={Sopport} alt="" /></span>Soporte</button>
                </div>
            </div>

            <div className="grid grid-cols place-items-center">
                <div className="rounded-full border-4 border-slate-700 mb-5">
                    {selectedProfileImage ? (
                        <img className="h-14 object-cover object-top w-14 rounded-full" src={selectedProfileImage} alt="" />) :
                        (<img className="h-14 object-cover object-center w-14 rounded-full" src={Avatar} alt="" />)}
                </div>
                <div>
                    <h1 className="text-blue-800 font-medium text-lg">Ana Robles</h1>
                </div>
                <div>
                    <input type="file" accept="image/*" onChange={handleProfileImageChange} style={{ display: 'none' }} id="profile-image-input" />
                    <label htmlFor="profile-image-input" className="text-blue-800 font-medium cursor-pointer text-sm">Seleccion o cambiar foto</label>
                </div>
            </div>
        </nav>
    );
}

export default SliderBoard;