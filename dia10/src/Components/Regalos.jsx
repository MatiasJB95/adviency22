import React, { useState, useRef, useEffect } from "react";
import { nanoid } from 'nanoid'
import "./regalos.css"

const Regalos = () => {
  const [nombre, listaNombre] = useState("");
  const [unidad, setUnidad]= useState("1");
  const [imagen, setImagen] = useState("");
  const [regalos, listaRegalos] = useState( JSON.parse(localStorage.getItem("regalos")) || []);
  let ref = useRef(null);



  const handleChange = (e) => {
    listaNombre(e.target.value);
  };



  const handleClick = (e) => {
    e.preventDefault();
    let num = parseFloat(unidad);
    if (unidad <=0 ){
      num=1;
    }else if(num >=20 ) {
      num=20;
    }

    let imge = imagen;
    if(imagen ==="" )
    imge = "Imagen no Disponible"

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
              num,
              imge,
            },
          ]);
      ref.current.value = "";
      listaNombre("");
    }
  };
  useEffect(() => {
    localStorage.setItem("regalos", JSON.stringify(regalos));
  }, [regalos]);
  
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
        <br/>
        <label> Numero de Regalos 
         <input
          type="number"
          id="number"
          required="required"
          min={1}
          max={20}
          onChange={(e) => {
            setUnidad(e.target.value);
          }}
        /></label>

<br/>
         <input
          type="text"
          id="imgen"
          required="required"
          onChange={(e) => {
            setImagen(e.target.value);
           
          }}
          />
          <br/>
            <button
          type="submit"
          value="Añadir"
          className=" "
          onClick={(e) => {
            handleClick(e);
          }}
        >Añadir </button>
        
          
      </form>



      <p className={`${regalos.length >= 1 ? "hide" : "show"}`}>
        Agrega el primer regalo 
      </p>
      <ul className="">
        {regalos.map((regalo) => {
          const { id, nombre, num, imge } = regalo;
          return (
             <div  key={id} >
              <p className="" >
               {num} {nombre} 
              </p>
              <img src={imge} alt="Imagen no Disponible" width="400" height="341" ></img>
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