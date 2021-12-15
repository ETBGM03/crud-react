import React from "react";

const Posiciones = () => {
  return (
    <div
      style={{
        width: "90%",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "white", fontSize: "2rem" }}>
        TABLA DE POSICIONES DE LOS JUGADORES
      </h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Nombre Ususario</th>
            <th>Id Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Esteban</th>
            <th>123456789</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Posiciones };
