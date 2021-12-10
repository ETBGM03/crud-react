import React from "react";

const BotonCrearUsuario = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        type="submit"
        style={{
          width: "15vw",
          height: "8vh",
          fontSize: "1.6rem",
          border: "noneñ",
          borderRadius: "1rem",
          outline: "transparent",
        }}
      >
        Iniciar Juego
      </button>
    </div>
  );
};

export {BotonCrearUsuario};
