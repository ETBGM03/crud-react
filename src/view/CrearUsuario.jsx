import React, { useEffect, useState } from "react";
import "./../css/CrearUsuario.css";
import { BotonCrearUsuario } from "./../components/BotonCrearUsuario";
const CrearUsuario = () => {
  // const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState({});
  const [valoresform, setValoresform] = useState({
    nombre: "",
    apellido: "",
    identificacion: 0,
  });
  let { nombre, apellido, identificacion } = valoresform;

  const handleInputChange = (e) => {
    setValoresform({
      ...valoresform,
      [e.target.name]: e.target.value,
    });
  };

  const enviarValoresForm = async (e) => {
    nombre === "" || apellido === "" || identificacion === 0
      ? alert("error al enviar datos")
      : e.preventDefault();
    let respon = await fetch("http://localhost:3001/v1/api/crearUsuario", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        identificacion,
      }),
    });
    let data = await respon.json();
    if (data.status === 201) setUsuarios(data.status);

    setValoresform({
      nombre: "",
      apellido: "",
      identificacion: 0,
    });
    e.target.reset();
  };

  const redireccionadion = () => { window.location.replace("http://localhost:3000/preguntas") };

  return (
    <div className="container-form">
      <form
        method="POST"
        onSubmit={enviarValoresForm}
        className="form-crear-usuario"
      >
        <input
          type="text"
          name="nombre"
          className="input"
          id="input1"
          placeholder="Nombre usuario"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="apellido"
          id="input2"
          className="input"
          placeholder="Apellido usuario"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="identificacion"
          id="input3"
          className="input"
          placeholder="Cédula usuario"
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">Iniciar Juego</button>
          <button type="button" onClick={redireccionadion}>Probado</button>
        </div>
        {/* <BotonCrearUsuario /> */}
      </form>
    </div>
  );
};

export { CrearUsuario };
