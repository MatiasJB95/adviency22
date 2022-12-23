import React, { useState, useRef } from "react";
import { nanoid } from 'nanoid'


const Regalos = () => {
    let ref = useRef(null);
    const [regalos, listaRegalos] = useState([]);
    const [name, setName] = useState("");
  
    const handleClick = (e) => {
      e.preventDefault();
      if (
        !name ||
        name.valueOf().trim().length <= 2 ||
        name.valueOf().trim().length <= 0 ||
        name.valueOf().trim().length >= 60
      ) {
        alert("El regalo no puede tener menos de 2 carácteres.");
      } else {
        regalos.length >= 20
          ? alert(
              "No mas de 20 regalos"
            )
          : listaRegalos([
              ...regalos,
              {
                id: nanoid(6),
                name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
              },
            ]);
        setName("");
        ref.current.value = "";
      }
    };
  
    const eliItem = (id) => {
      let filtered = regalos.filter((regalo) => regalo.id !== id);
      listaRegalos(filtered);
    };
  
    const eliTodo = () => {
      listaRegalos([]);
    };
  
    return (
      <div className="">
        
        <h2>Regalos</h2>
        <form className="">
          <input
            type=""
            className=""
            ref={ref}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className=""
            type=""
            value={`Añadir`}
            onClick={(e) => {
              handleClick(e);
            }}
          > Añadir </button>
        </form>
        <ul className="">
          {regalos.map((regalo) => {
            const { id, name } = regalo;
            return (
              <li key={id} className="">
                <h4>{name}</h4>
                <button className="" onClick={() => eliItem(id)}>
                 X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className=""
          onClick={() => {
            eliTodo();
          }}
        >
          Eliminar todo
        </button>
      </div>
    );
  };
export default Regalos;