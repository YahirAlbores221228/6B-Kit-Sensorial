import 'aos/dist/aos.css';
function Report() {
    return (
        <>
            <div className=" grid grid-cols-2 w-full bg-gray-50 h-auto p-10  pr-20 place-items-center">
                <form action="" data-aos="fade-right" data-aos-duration="1500">
                    <div className="grid gap-5">
                        <label htmlFor="" className="font-medium text-slate-800 text-lg">Name</label>
                        <input type="text" required placeholder="Full Name" className="w-96 p-2 h-12  rounded-md border-2 border-gray-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
                        <label htmlFor="" className="font-medium text-slate-800 text-lg">Gmail</label>
                        <input type="gmail" placeholder="Gmail" required className="w-96 p-2 h-12  rounded-md border-2 border-gray-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />
                        <label htmlFor="" className="font-medium text-slate-800 text-lg">Menssage</label>
                        <textarea name="" placeholder="Your Report Here" id="" className="w-96 h-20 p-2  rounded-md border-2 border-gray-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" cols="30" rows="10"></textarea>
                        <div>
                            <button className="shadow-xl shadow-gray-300 opacity-100 bg-blue-700 hover:opacity-95 text-white px-9 py-2 w-40 rounded-full font-semibold text-ls">Send</button>
                        </div>
                    </div>
                </form>
                <div >
                    <div className="grid gap-10" data-aos="fade-down"
                        data-aos-easing="linear" data-aos-duration="1500">
                        <div>
                            <h1 className="text-4xl font-bold">Technical support</h1>
                        </div>
                        <div>
                            <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam expedita atque praesentium officiis? Illum animi voluptas temporibus cum iusto repudiandae quibusdam facilis.</p>
                        </div>
                        <div>
                            <p className="mb-5 text-gray-600 text-lg">If you prefer more questions or suggestions, call:</p>
                            <h1 className="font-medium text-2xl text-slate-700">+ 52 961 323 4438</h1>
                        </div>
                        <div>
                            <h1 className="font-bold text-4xl mb-5">Opening hours:</h1>
                            <p className="font-medium text-2xl text-slate-700">8 a.m. to 4 p.m.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Report;