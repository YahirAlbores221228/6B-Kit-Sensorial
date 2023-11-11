import ViewHome from "./Viewhome"
import Viewrepport from "./Viewrepport"
function ContentView({ currentView }) {
    return (

        <>
            <div className="w-full p-4 h-screen overflow-y-auto">
                {currentView === 'Home' && <ViewHome />}
                {currentView === 'Repport' && <Viewrepport />}
            </div>

        </>
    );
}

export default ContentView;