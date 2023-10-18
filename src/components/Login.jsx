import Logo from "../assets/img/Logos/Blubbysoft.png"
function Login() {
    return (
        <>
            <div className="grid place-items-center h-screen m-auto">
                <div className="bg-white w-96 p-10 shadow border-2 border-slate-200">
                    <form className="grid gap-10">
                        <div className="text-center">
                            <img src={Logo} className="mx-auto w-20 h-20" />
                            <h1 className="text-2xl mt-5 font-bold text-gray-400 font-sans">Sign in to your account</h1>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500" htmlFor="">User</label>
                            <div className="mt-2">
                                <input type="text" placeholder="Enter your user" required className="w-full rounded-md py-1.5 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500" htmlFor="">Password</label>
                            <div className="mt-2">
                                <input type="password" placeholder="Enter your password" required className="w-full rounded-md py-1.5 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <button class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;