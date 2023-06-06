import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
    return(
        //clase d-flex de bs para utilizar flexbox y justify content between para mostrar los elementos a cada extremo
        //align-items-center para centrar el boton
        <header className="d-flex justify-content-between align-items-center">
            <p>Page: {props.page}</p>
            <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>Page: {props.page + 1}</button>
        </header>
    )
}

function CharacterList() {

  //useState (como variables en react)
  const [characters, setCharacters] = useState([])

  //useState para simular pantalla de carga cuando no se han cargado todos los datos
  const [loading, setLoading] = useState(true)

  //useState para pasar de pagina
  const [page, setPage] = useState(1)

  //useEffect con arreglo vacio solo ejecuta una vez cuando la app carga
  //pasamos un parametro para que se ejecute cada vez que reciba ese parametro
  useEffect(() => {
    //console.log("cargó");
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      //objeto json con la respuesta del fetch
      const data = await response.json();

      //cambiamos el estado a false cuando ya obtuvimos los datos
      setLoading(false);

      //tomamos de data->results
      console.log(data.results);

      //guardamos el arreglo del json en characters mediante la funcion setCharacters
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

//   if(loading){
//     return(
//         <div>Loading...</div>
//     )
//   }

  return (
    <div className="container">

    <NavPage page={page} setPage={setPage}/>

    {
    loading ? ( <h1>Loading...</h1> ) : ( 

    <div className="row">
    {
    //recorremos el array 1 a 1 mediante map
    characters.map(character => {
    //retornamos los datos por cada character
    return (
        //llamamos al componente Character por cada recorrido
        //podemos pasamos cada propiedad por separado o todo el objeto
        //<Character id={character.id} name={character.name} />

        //key (tiene que ser el que es hijo directo del componente) en el root al momento de ser llamado
       <div className="col-md-4" key={character.id} >
         <Character character={character}/>
       </div>
     );
  })}
  </div>
    )}
        <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList