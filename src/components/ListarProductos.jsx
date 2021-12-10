import React, { useEffect, useState } from "react";
import "./../css/ListarProducto.css";
const ListarProductos = () => {
  const [productosApi, setProductos] = useState([]);
  useEffect(() => {
    requestApi();
  }, []);
  async function requestApi() {
    try {
      let data = await fetch("http://localhost:3001/api/v1/productos");
      let results = await data.json();
      setProductos(results);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(productosApi);
  return (
    <div className="listadoProductos">
      <h2>Listado de productos</h2>
      <ol>
        {productosApi.map((el) => (
          <li key={el.id}>{el.nombre}</li>
        ))}
      </ol>
    </div>
  );
};

export { ListarProductos };
