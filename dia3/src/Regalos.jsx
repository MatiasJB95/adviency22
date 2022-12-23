import {useState} from 'react';


function Regalos() {

    const [regalo, setRegalo] = useState('');
    const [listaRegalos, setLista ] = useState(["Pionono","Zapatillas","pc"]);

    const handleChange = (e) => {
        setRegalo(e.target.value);
    }
    const handleSubmit = (e) =>{
        setLista([...listaRegalos, regalo])
        setRegalo('');
        e.preventDefault();
    };
    return(
        <div className=" flex justify-center items-center h-screen fondo bg-no-repeat bg-cover fondo" >

            <div ClassName=" items-center mt-16 mr-14">
            <h1 className="gifs mt-16 mr-14"  ><span>Regalos</span></h1>
            <form className='mr-14 max-w-[400px] w-full mx-auto p-8 py-8 bg-red-900 rounded-lg' onSubmit={handleSubmit}>
            <div className='flex justify-around' >
                <input type="text" name='regalo' vale={regalo} onChange={handleChange}/>
                <button type="submit" className='w-3/12 py-2 bg-green-900 shadow-lg bot rounded-full '>Agregar</button>
            </div>
            <ul className='flex flex-col p-4 mt-4 ' >
                {listaRegalos.map((regalo, index) =>(
                    <li key={index} className='text-lg text-left list '> {regalo}</li>
                ) )}
            </ul>
            
            </form>
            </div>

        </div>
    )




}
 
export default Regalos;