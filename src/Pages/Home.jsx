import Navbar from "../components/Navbar";
import Informationss from "../components/Informations";
import Graph from "../components/Graph";
import Maps from "../components/Maps";
import Footer from "../components/Footer";
import Report from "../components/Report";
function Home() {
    return (
        <>
            <div className="h-screen">
                <Navbar />
                <Informationss />
                <Graph />
                <Maps />
                <Report />
                <Footer />
            </div>
        </>

    );
}
export default Home;