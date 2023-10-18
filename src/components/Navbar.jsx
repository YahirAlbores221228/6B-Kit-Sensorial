import Logo from "../assets/img/Logos/Yahir.jpg"
import Notification from "../assets/img/Icons/notification.png"
import LogoBubbly from "../assets/img/Logos/Blubbysoft.png"
function Navbar() {
    return (
        <>
            {/*Navbar*/}
            <nav className="flex justify-between items-center bg-gray-800  shadow-xl h-24 p-10 font-sans">
                <div className="flex items-center gap-10">
                    <div className="flex rounded-full border-4 border-white">
                        <img className="h-full  object-cover w-14 rounded-full" src={Logo} alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-2xl text-white">Yahir Alberto Albores Madrigal</h1>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img className="h-full w-full object-cover" src={Notification} alt="" />
                </div>
            </nav>
        </>

    );
}

export default Navbar;


