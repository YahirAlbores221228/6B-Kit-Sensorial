import Pastel from "./Pastel";
function Graph() {
    return (
        <>

            <div className="h-auto p-14 grid grid-cols-2 place-items-center">
                <div className="grid place-items-center">
                    <h1 className='font-bold text-4xl text-center text-gray-800 mb-8'>Distances from points of interest in Suchiapa</h1>
                    <Pastel />
                </div>
                <div>
                    <h1 className="font-bold text-5xl">Datos</h1>
                </div>

            </div>
        </>
    );
}

export default Graph;