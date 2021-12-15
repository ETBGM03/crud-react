import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PuntosAcumulados } from "../components/PuntosAcumulados";
const Juego = () => {
  const [pregunta, setPregunta] = useState([]);
  const [respuesta, setRespuesta] = useState([]);
  const [respuestaValida, setRespuestaValida] = useState(false);
  // const [puntos, setPuntos] = useState(0);
  const [respuestaInvalida, setRespuestaInvalida] = useState(false);
  // const [ultimaRonda, setUltimaRonda] = useState(0);
  // const [sgtRonda, setSgtRonda] = useState(false);
  // const [mostrarTablaPsociones, setmostrarTablaPsociones] = useState(false);

  let param = useParams();
  let idUrl = parseInt(param.id); //idUrl con la cual hacemos una peticion/consulta para traer la pregunta random

  //esta funcion es para traer la pregunta random
  const getRondaInicioJuego = async () => {
    try {
      let url = `http://localhost:3001/v1/api/ronda/${idUrl}`;
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let ronda = await data.json();
      setPregunta(ronda);
    } catch (error) {
      console.log(error);
    }
  };
  //ejecutamos esta funcion para que cada que cambie el id en la url se ejecute y poder sacar
  //la pregunta randon acorde a la ronda la cual esté jugando
  useEffect(() => {
    getRondaInicioJuego();
  }, [idUrl]);

  //aqui hacemos la consulta que trae a las respuestas de la pregunta random
  //por medio de un efecto de usestate
  useEffect(async () => {
    let { id_pregunta } = pregunta[0];
    getRespuestas(id_pregunta);
  }, [pregunta]);

  async function getRespuestas(id_pregunta) {
    try {
      let url = `http://localhost:3001/v1/api/respuestas/${id_pregunta}`;
      let data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let respuestas = await data.json();
      setRespuesta(respuestas);
    } catch (error) {
      console.log(error);
    }
  }

  const validarSiEsCorrecta = (valida) => {
    if (valida === 1) {
      setRespuestaValida(true); //si la respuesta es correcta
      // setSgtRonda(true);
      setTimeout(() => {
        redireccionadion(idUrl + 1);
      }, 3500);
    } else {
      setRespuestaInvalida(true); //si la respuesta es incorrecta
      // setSgtRonda(false);
    }
  };
  const redireccionadion = (idRonda) => {
    if (idRonda > 5) {
      window.location.replace(`http://localhost:3000/posiciones`);
    } else {
      window.location.replace(`http://localhost:3000/ronda/${idRonda}`);
    }
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      {/* <PuntosAcumulados puntos={puntos} /> */}
      <h2 style={{ fontSize: "2rem", color: "white", marginBottom: "1rem" }}>
        Empezamos a jugar
      </h2>

      {respuestaValida ? (
        <span style={{ color: "green", fontSize: "1.4rem" }}>
          Respuesta Correcta
        </span>
      ) : null}
      {respuestaInvalida ? (
        <span style={{ color: "red", fontSize: "1.4rem" }}>
          Respuesta Incorrecta
        </span>
      ) : null}

      {pregunta.map((pre) => (
        <p
          style={{
            fontSize: "2rem",
            color: "white",
            width: "75vw",
            textAlign: "center",
            marginBottom: "1rem",
          }}
          key={pre.id_pregunta}
        >
          {pre.pregunta}
        </p>
      ))}

      {respuesta.map((res) => (
        <>
          <button
            id="btn-validar"
            className="readOnly"
            key={res.id_respuesta}
            onClick={() => validarSiEsCorrecta(res.valida)}
            style={{
              fontSize: "1rem",
              borderRadius: "1rem",
              height: "5rem",
              width: "25rem",
              cursor: "pointer",
              margin: ".5rem 0",
            }}
          >
            {res.respuesta_pregunta}
          </button>
        </>
      ))}
      {/* {sgtRonda ? (
        <input
          style={{
            backgroundColor: "white",
            borderRadius: ".3rem",
            height: "2rem",
            width: "10rem",
            margin: ".5rem 0",
            fontSize: "1rem",
          }}
          type="button"
          name="sgtRonda"
          id="sgtRonda"
          value="Sguiente Ronda"
        />
      ) : null} */}
    </main>
  );
};

export { Juego };
