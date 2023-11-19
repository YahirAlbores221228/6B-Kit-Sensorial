function ViewRepport() {
    return (
        <div className="grid place-items-center shadow shadow-gray-400 h-full rounded-lg p-5 md:p-10">
            <h1 className="font-bold text-2xl md:text-4xl text-slate-700">Envíe su informe del sistema</h1>
            <form action="">
                <div className="grid gap-5">
                    <label for="name" className="font-medium text-slate-800 text-lg">Nombre</label>
                    <input type="text" id="name" required placeholder="Nombre completo" className="w-full md:w-96 p-2 h-12 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
                    <label for="gmail" className="font-medium text-slate-800 text-lg">Correo</label>
                    <input type="email" id="gmail" placeholder="Correo electronico" required className="w-full md:w-96 p-2 h-12 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
                    <label for="message" className="font-medium text-slate-800 text-lg">Mensaje</label>
                    <textarea name="message" id="message" placeholder="Su informe aqui" className="w-full md:w-96 h-20 p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" cols="30" rows="10"></textarea>
                    <div>
                        <button className="shadow-xl shadow-gray-300 opacity-100 bg-blue-700 hover:opacity-95 text-white px-6 md:px-9 py-3 w-full md:w-96 rounded-md font-semibold text-ls">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ViewRepport;