import backgroundregister from "../assets/img/Background/Backregister.jpg"
function Register() {
    return (
        <>
            <div className="grid place-items-center h-screen">

                {/**contenedor de register */}
                <form action="" className="grid grid-cols-2 bg-white w-1/2 h-auto shadow rounded-r-lg rounded-l-lg shadow-slate-300">

                    <div className="w-full rounded-l-lg">
                        <img src={backgroundregister} alt="" className="object-cover rounded-l-lg h-full" />
                    </div>

                    <div className="p-2 rounded h-full w-full">
                        <div className="mb-10 text-3xl font-bold text-slate-700 text-center">
                            <h1>Create Account</h1>
                        </div>

                        <div className="grid grid-cols-2 mb-5  gap-5">
                            <div >
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Gmail</label>
                                <div className="mt-2">
                                    <input type="text" placeholder="Gmail" required className="w-full rounded-md py-2 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Name from Reponsible</label>
                                <div className="mt-2">
                                    <input type="password" placeholder="Name from reponsible" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                            <div >
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Phone</label>
                                <div className="mt-2">
                                    <input type="text" placeholder="Phone" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Mobile Phone</label>
                                <div className="mt-2">
                                    <input type="password" placeholder="Mobile phone" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="grid mb-9 gap-5">
                            <div>
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Name of desability</label>
                                <div className="mt-2">
                                    <input type="password" placeholder="Name of desability" required className="w-full rounded-md py-2 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Relationship</label>
                                <div className="mt-2">
                                    <input type="password" placeholder="Relationship" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500" htmlFor="">Password</label>
                                <div className="mt-2">
                                    <input type="password" placeholder="Password" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;