import React, { useState, useRef, } from "react";
import { nanoid } from "nanoid";
let data = ["Vitel tone", "Pionono de la abuela"];
const Regalos = () => {
  const ref = useRef(null);
  const [gifts, setGifts] = useState(data);
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (
      !name ||
      name.valueOf().trim().length <= 2 ||
      name.valueOf().trim().length <= 0
    ) {
      alert("El regalo no puede tener un nombre con 2 carácteres o menos.");
    } else if (name.valueOf().trim().length >= 66) {
      alert("El regalo no puede tener más de 66 carácteres");
    } else {
      gifts.length >= 10
        ? console.log(
          )
        : setGifts([
            ...gifts,
            {
              id: nanoid(6),
              name:
                name.toLowerCase().charAt(0).toUpperCase() +
                name.slice(1).toLowerCase(),
            },
          ]);
      setName("");
      ref.current.value = "";
    }
  };
  const eraseItem = (id) => {
    let filtered = gifts.filter((gift) => gift.id !== id);
    setGifts(filtered);
  };
  return (
    <div className=" flex justify-center items-center h-screen fondo bg-no-repeat bg-cover fondo" >
    <div ClassName=" items-center mt-16 mr-14">
      <h1 className="gifs mt-16 mr-14" >Regalos</h1>
      <form className="mr-14 max-w-[400px] w-full mx-auto p-8 py-8 bg-red-900 rounded-lg">
      <div className='flex justify-around' >
        <input
          type="text"
          className=""
          ref={ref}
          onChange={(e) => setName(e.target.value)}
        />
        <button  className='w-3/12 py-2 bg-green-900 shadow-lg bot rounded-full'
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
         >Agregar </button>
        </div>

      <ul className="">
        {gifts.map((gift) => {
          const { id, name } = gift;
          return (
            <div>
            <li key={id} className="">
              <h3 className="textt">{name}</h3>
              </li>
              <button
                className="w-3/12 py-2 bg-green-900 shadow-lg bot rounded-full"
                onClick={() => {
                  eraseItem(id);
                }}
              >
                X
              </button>

            </div>
          );
        })}

      </ul>
      </form>
    </div>
    </div>
  );
};
export default Regalos;