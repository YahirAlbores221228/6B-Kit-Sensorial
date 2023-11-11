function ViewRepport() {
    return (

        <>
            <div class="grid place-items-center shadow shadow-gray-400 h-full rounded-lg p-5 md:p-10">
                <h1 class="font-bold text-2xl md:text-4xl text-slate-700">Submit your System Report</h1>
                <form action="">
                    <div class="grid gap-5">
                        <label for="name" class="font-medium text-slate-800 text-lg">Name</label>
                        <input type="text" id="name" required placeholder="Full Name" class="w-full md:w-96 p-2 h-12 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />

                        <label for="gmail" class="font-medium text-slate-800 text-lg">Gmail</label>
                        <input type="email" id="gmail" placeholder="Gmail" required class="w-full md:w-96 p-2 h-12 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" />

                        <label for="message" class="font-medium text-slate-800 text-lg">Message</label>
                        <textarea name="message" id="message" placeholder="Your Report Here" class="w-full md:w-96 h-20 p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" cols="30" rows="10"></textarea>

                        <div>
                            <button class="shadow-xl shadow-gray-300 opacity-100 bg-blue-700 hover:opacity-95 text-white px-6 md:px-9 py-3 w-full md:w-96 rounded-md font-semibold text-ls">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ViewRepport;