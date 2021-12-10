import React from "react";

const Juego = () => {
  const getRondaInicioJuego = async () => {
    let data = await fetch("http://localhost:3000/api/v1/iniciarJuego");
    let ronda = await data.json();
    console.log(ronda);
  };
  getRondaInicioJuego();
  return (
    <main>
      <h2>Iniciamos el juego</h2>
    </main>
  );
};

export { Juego };
