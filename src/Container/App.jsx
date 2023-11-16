import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from '../Pages/Register';
import UsersimgContext from "../Context/UsersimgContext"
function App() {
  const [usersimg, setUsersimg] = useState("");
  return (
    <>
      <BrowserRouter>
        <UsersimgContext.Provider value={{ usersimg, setUsersimg }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </UsersimgContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
