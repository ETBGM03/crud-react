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
          <Route exact path="/" element={<CrearUsuario />} />
          <Route exact path="/preguntas" element={<Juego />} />
          <Route exact path="/posiciones" element={<Posiciones />} />
        </Routes>
      </Router>
      ,
    </div>
  );
};

export { App };
