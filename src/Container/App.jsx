import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from '../Pages/Register';
import GraphicContext from "../Context/GraphicContext"

function App() {
  const [graphic, setGraphic] = useState("");
  
  return (
    <>
      <BrowserRouter>
        <GraphicContext.Provider value={{ graphic, setGraphic }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </GraphicContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
