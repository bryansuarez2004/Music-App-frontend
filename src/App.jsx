import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Playlists from "./components/pages/Playlists";
import Favorites from "./components/pages/Favorites";
import PrincipalStructure from "./components/layout/PrincipalStructure";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Routes>
        <Route element={<PrincipalStructure />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <ToastContainer autoClose={1500} />
      
    </>
  );
}

export default App;
