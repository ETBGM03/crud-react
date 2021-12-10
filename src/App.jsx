import React, { useState } from "react";
import { CrearUsuario } from "./view/CrearUsuario";
import { Juego } from "./view/Juego";
import { Posiciones } from "./view/Posiciones";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
const App = () => {
  // const [usuarios, setUsuarios] = useState({});
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<CrearUsuario />} />
          <Route path="/preguntas" element={<Juego />} />
          <Route path="/posiciones" element={<Posiciones />} />
        </Routes>
      </Router>
      ,
    </div>
  );
};

export { App };
