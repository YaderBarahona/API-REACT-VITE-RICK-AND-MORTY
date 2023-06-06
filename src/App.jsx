import { useEffect, useState } from "react";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";

function App() {

  // //useState (como variables en react)
  // const [characters, setCharacters] = useState([])

  // useEffect(() => {
  //   //console.log("cargó");
  //   async function fetchData(){
  //     const response = await fetch("https://rickandmortyapi.com/api/character")
  //     //objeto json con la respuesta del fetch
  //     const data = await response.json()
  //     //tomamos de data->results
  //     console.log(data.results)

  //     //guardamos el arreglo del json en characters mediante la funcion setCharacters
  //     setCharacters(data.results);
  //   }

  //   fetchData();
  // }, [])

  return ( 
    <div className="bg-dark text-white ">

    <h1 className="text-center  display-1 py-4">Rick And Morty API</h1>

    {/* para pasar el useState por props hacia   el componente*/}
    {/*<CharacterList characters={characters}/>*/}
    <CharacterList/>
    </div> 
  )
}

export default App
