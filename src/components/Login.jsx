import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Logo from "../assets/img/Logos/Blubbysoft.png"

function Login() {
    const navigate = useNavigate();
    const formDataF = useRef();
    const handleLoginClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formDataF.current)
        const URI = ""
        let options = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                "email": formData.get('email'),
                "password": formData.get('password')
            })
        }
        fetch(URI, options)
            .then(Response => Response.json())
            .then(data => { alert(JSON.stringify(data)) })
    }

    const handleRegistrationClick = () => {
        navigate('/Register');
    };

    return (
        <div className="grid place-items-center h-screen m-auto">
                <form className="grid gap-10  bg-white w-full md:w-96 p-6 md:p-10 shadow border-2 border-slate-200" ref={formDataF} >
                    <div className="text-center">
                        <img src={Logo} className="mx-auto w-16 h-16 md:w-20 md:h-20" alt="Logo" />
                        <h1 className="text-xl md:text-2xl mt-3 font-bold text-slate-700  font-sans">Iniciar sesion en su cuenta</h1>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-500">Correo</label>
                        <input type="text" placeholder="Ingrese su usuario" required className="w-full rounded-md py-2 px-3 mt-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" name="email" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-500">Contraseña</label>
                        <input type="password" placeholder="Ingrese su contraseña" required className="w-full rounded-md py-2 px-3 mt-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" name="password" />
                    </div>
                    <div className="text-center">
                        <button className="flex w-full mb-2 justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus:outline-none focus:ring focus:border-blue-700 hover:bg-blue-700 focus-visible:outline-visible focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={handleLoginClick}>
                            Iniciar sesion
                        </button>
                        <label className="text-slate-900">No tienes cuenta? </label>
                        <span className="text-blue-500 underline decoration-sky-600 cursor-pointer" onClick={handleRegistrationClick}>Registrate aqui</span>
                    </div>
                </form>
        </div>
    );
}

export default Login;