import { useRef } from "react";
import backgroundregister from "../assets/img/Background/Visualizacion3.jpg"
function Register() {

    const formDataU = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formDataU.current);
        fetch("http://44.214.168.115:3000/users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.get("email"),
                id_region: formData.get("1"),
                name_of_responsible: formData.get("name_of_responsible"),
                phone: formData.get("phone"),
                mobile_phone: formData.get("mobile_phone"),
                name_of_desability: formData.get("name_of_desability"),
                relationship: formData.get("relationship"),
                password: formData.get("password"),
                Image: formData.get(0),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data)
            });

    };

    return (
        <div className="grid place-items-center h-screen">
            <form ref={formDataU} className="grid grid-cols-2 bg-white w-1/2 h-auto shadow rounded-r-lg rounded-l-lg shadow-slate-300">
                <div className="w-full rounded-l-lg">
                    <img src={backgroundregister} className="object-contain rounded-l-lg h-full" />
                </div>
                <div className="p-2 rounded h-full w-full">
                    <h1 className="mb-10 text-3xl font-bold text-slate-700 text-center">Crear cuenta</h1>
                    <div className="grid grid-cols-2 mb-5  gap-5">
                        <div>
                            <label className="text-sm font-medium text-gray-500">Correo</label>
                            <input type="text" placeholder="Ingrese su correo" required name="email" className="w-full rounded-md py-2 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Nombre del responsable</label>
                            <input type="text" placeholder="Nombre del responsable" name="name_of_responsible" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Telefono</label>
                            <input type="text" placeholder="Telefono" required name="phone" className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Telefono movil</label>
                            <input type="text" placeholder="Telefono movil" name="mobile_phone" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                        </div>
                    </div>
                    <div className="grid mb-9 gap-5">
                        <div>
                            <label className="text-sm font-medium text-gray-500">Nombre de la invalidez</label>
                            <input type="text" placeholder="Nombre de la invalidez" name="name_of_desability" required className="w-full rounded-md py-2 pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Relacion</label>
                            <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" name="relationship">
                                <option selected>Seleccione una opcion</option>
                                <option value="Padres">Padres</option>
                                <option value="Abuelos">Abuelos</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Contraseña</label>
                            <input type="password" placeholder="Ingrese su contraseña" required className="w-full rounded-md py-2  pl-2 pr-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none" name="password" />
                        </div>
                    </div>
                    <div>
                        <button className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Registrarme</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Register;