import React, { useState, useRef, } from "react";
import { nanoid } from 'nanoid'
import "./regalos.css"

const Regalos = () => {
  const [nombre, listaNombre] = useState("");
  const [regalos, listaRegalos] = useState([]);
  const [vacio, listaVacio]= useState(true);
  let ref = useRef(null);



  const handleChange = (e) => {
    listaNombre(e.target.value);
  };



  const handleClick = (e) => {
    e.preventDefault();
    if (
      nombre.valueOf().trim().length <= 2 ||
      nombre.valueOf().trim().length <= 0 ||
      !nombre ||
      nombre.valueOf().trim().length >= 60
    ) {
      alert("El regalo no puede tener menos de 2");
    }  else if (
      regalos.filter(
        (regalo) =>
          regalo.nombre.valueOf().trim().toLowerCase() ===
          nombre.valueOf().trim().toLowerCase()
      ).length > 0
    ) {
      alert("Ya pediste ese Regalo");
      ref.current.value = "";
      listaNombre("");
    }
    else {
      regalos.length >= 10
        ? alert(
            "No mas de 20 regalos"
          )
        : listaRegalos([
            ...regalos,
            {
              id: nanoid(6),
              nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(),
            },
          ]);
      ref.current.value = "";
      listaNombre("");
    }
  };

  const elimItem = (id) => {
    let filtered = regalos.filter((regalo) => regalo.id !== id);
    listaRegalos(filtered);
  };

  const elimTodo = () => {
    listaRegalos([]);
  };



  return (
    <div className="">
      
      <h2>Regalos</h2>
      <form className="">
        <input
          type="text"
          className=""
          ref={ref}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          value="Añadir"
          className=" "
          onClick={(e) => {
            handleClick(e);
            listaVacio(!vacio)
          }}
        >Añadir </button>
      </form>



      <p className={`${regalos.length >= 1 ? "hide" : "show"}`}>
        Agrega el primer regalo 
      </p>
      <ul className="">
        {regalos.map((regalo) => {
          const { id, nombre } = regalo;
          return (
             <div  key={id} >
              <p className="" >
                {nombre}
              </p>
              <button
                className=""
                onClick={() => {
                  elimItem(id);
                }}
              >
                X
              </button>
              </div>
          );
        })}
      </ul>
      <button className="" onClick={() => elimTodo()}>
        Eliminar todos
      </button>
    </div>
  );
    
  };
export default Regalos;