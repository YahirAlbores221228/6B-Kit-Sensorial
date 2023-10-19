import React, { useState } from 'react';
import Ilustracion from "../assets/img/Ilustracion/visual3.png"
function Informations() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Section-informacions */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center content-center py-20 px-6 md:px-28 h-auto bg-slate-50">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl text-slate-800 font-bold mb-5">KIT SENSORIAL</h1>
                    <p className="text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsam harum. Debitis dolore sunt porro tenetur quasi blanditiis autem, voluptate minus ab, commodi necessitatibus eligendi laborum odit iste. Quidem, autem. Modi numquam aliquam dignissimos ex consequuntur enim quia voluptate consectetur, voluptatem saepe repellendus tempore perferendis velit minus totam obcaecati accusantium quam debitis quod, expedita itaque quibusdam est magni optio.</p>
                    <div className="pt-5" onClick={openModal}>
                        <button className="bg-green-600 opacity-100 hover:opacity-95 shadow-md text-white rounded-full px-7 py-2 text-sm md:text-lg font-medium text-center md:text-right">Vision and Mission</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className="object-cover transform scale-x-[-1] h-full w-full" src={Ilustracion} alt="" />
                </div>
            </div>
            {/**Contruccion del modal de vision y Mision */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={closeModal}></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <h1 className="text-2xl font-bold text-slate-700">Vision y Mision</h1>
                                <div className="modal-close cursor-pointer z-60 hover:bg-gray-200 p-2 rounded-lg" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="my-5 divide-y-4 divide-slate-400/25">
                                <div className="mb-5">
                                    <h1 className="font-medium mb-5 text-gray-500 text-lg">Vision</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Cum quasi sapiente tenetur pariatur error perspiciatis recusandae. Fugit magni quibusdam, qui,
                                        explicabo sunt quo maxime ab totam officia dolor molestiae omnis?</p>
                                </div>
                                <div>
                                    <h1 className="font-medium mb-5 mt-5 text-gray-500 text-lg">Mision</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Unde neque recusandae soluta animi maxime obcaecati, illum quos, mollitia deserunt itaque rerum quod quisquam ex consequatur.
                                        Pariatur vitae ratione voluptate quibusdam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Informations;