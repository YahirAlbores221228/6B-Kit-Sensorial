import Pastel from "./Pastel";
function Graph() {
    return (
        <>

            <div className="h-auto p-10 grid grid-cols-2 bg-black place-items-center">
                <div className="grid place-items-center">
                    <h1 className='font-bold text-5xl text-center text-white mb-14'>Kilometers from points of interest in Suchiapa</h1>
                    <Pastel />
                </div>
                <div className="grid place-items-center gap-10">
                    <div>
                        <h1 className="font-bold text-5xl text-white">Information</h1>
                    </div>
                    <p className="text-white text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi corrupti et nostrum iure. Fuga, unde veritatis! Ipsum debitis recusandae minus, sint distinctio quisquam delectus officia nostrum enim maxime, error accusantium.
                        Accusantium consectetur aperiam voluptate, odio enim maiores voluptas deleniti, minus ipsa nobis impedit quia natus quos possimus mollitia cum consequatur, repudiandae harum unde atque excepturi iure dignissimos voluptatibus! Quam, qui.</p>
                </div>

            </div>
        </>
    );
}

export default Graph;