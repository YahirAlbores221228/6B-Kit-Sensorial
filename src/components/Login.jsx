import Logo from "../assets/img/Logos/Blubbysoft.png"
function Login() {
    return (
        <>
            <div className="grid place-items-center h-screen m-auto">
                <div className="bg-white w-full md:w-96 p-6 md:p-10 shadow border-2 border-slate-200">
                    <form className="grid gap-10">
                        <div className="text-center">
                            <img src={Logo} className="mx-auto w-16 h-16 md:w-20 md:h-20" alt="Logo" />
                            <h1 className="text-xl md:text-2xl mt-3 font-bold text-slate-700  font-sans">Sign in to your account</h1>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500" htmlFor="username">User</label>
                            <div className="mt-2">
                                <input type="text" id="username" placeholder="Enter your user" required className="w-full rounded-md py-2 px-3 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500" htmlFor="password">Password</label>
                            <div className="mt-2">
                                <input type="password" id="password" placeholder="Enter your password" required className="w-full rounded-md py-2 px-3 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <button className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus:outline-none focus:ring focus:border-blue-700 hover:bg-blue-700 focus-visible:outline-visible focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                Login in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Login;