function Footer() {
    return (
        <footer className="h-auto py-10 gap-10 bg-black grid place-items-center">
            <div><h1 className="text-lg text-white">Logo</h1></div>
            <div className="grid place-items-center w-full gap-10">
                <h1 className="text-white text-2xl font-semibold">Redes Sociales</h1>
                <div className="grid grid-cols-3 gap-10">
                    <p className="text-white text-lg">Facebook</p>
                    <p className="text-white text-lg">instagram</p>
                    <p className="text-white text-lg">Twiter</p>
                </div>
                <hr className="w-full border-solid" />
                <p className="font-medium text-base text-slate-400">@copyright 2023 innovative technologies</p>
            </div>
        </footer>

    );
}

export default Footer;

