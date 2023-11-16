import Pastel from "./Pastel"
import Maps from "./Maps"
function ViewHome() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-lg p-2 h-auto md:h-96 w-full shadow shadow-gray-400">  
                <Pastel />
            </div>
            <div className="rounded-lg shadow shadow-gray-400 p-4 md:h-auto">
                <div className="grid gap-5">
                    <div>
                        <h1 className="text-2xl md:text-3xl text-violet-700 font-bold">Apoyo Técnico</h1>
                    </div>
                    <div>
                        <p className="text-slate-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam expedita atque praesentium officiis? Illum animi voluptas temporibus cum iusto repudiandae quibusdam facilis.</p>
                    </div>
                    <div>
                        <p className="mb-2 md:mb-5 text-slate-700 text-base">Si prefieres más preguntas o sugerencias llama:</p>
                        <h1 className="font-semibold text-sm md:text-base text-slate-800">+ 52 961 323 4438</h1>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl md:text-3xl text-violet-700 mb-2 md:mb-5">Horario de apertura:</h1>
                        <p className="font-semibold text-sm md:text-base text-slate-800">8 am a 4 pm</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg w-full shadow md:col-span-2 shadow-gray-400">
                <h1 className="text-violet-700 text-lg font-medium mt-2 ml-2">Geolocalizacion</h1>
                <Maps />
            </div>
        </div>
    );
}

export default ViewHome;