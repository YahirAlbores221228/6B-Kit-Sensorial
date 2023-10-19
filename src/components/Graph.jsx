import Pastel from "./Pastel";
function Graph() {
    return (
        <>

            <div className="h-auto p-10 grid grid-cols-2 bg-black place-items-center">
                <div className="grid place-items-center">
                    <h1 className='font-bold text-5xl text-center text-white mb-14'>Kilometers from points of interest in Suchiapa</h1>
                    <Pastel />
                </div>
                <div>
                    <h1 className="font-bold text-5xl text-white">Datos</h1>
                </div>

            </div>
        </>
    );
}

export default Graph;