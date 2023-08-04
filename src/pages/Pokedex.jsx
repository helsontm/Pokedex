import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";




const Pokedex=()=>{
  //estado General
    const [pokeList, setPokeList] = useState([]);
// estado del tipo

    const [searchId, setSearchId] = useState("");

   
//Muestra todos los pokemons
    useEffect(() => {
    
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1263`)
          .then((resp) => {
            setPokeList(resp.data.results);
            
          })
          .catch((error) => console.error(error));
      }, []);



    

      const [currentPage, setCurrentPage] = useState(1);
      
  const pokemonsPerPage = 20;

  const lastIndex = pokemonsPerPage * currentPage; //uno mas
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonsPaginated = pokeList?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokeList?.length / pokemonsPerPage)
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

    


    return(


        <main>
          <Link to="/"><img src="hogar.png" title="HOME"></img></Link>

             <h1>Pokedex</h1>
             
         
        <div  className="divheader">
        <Link to='/poke_tipo'>
        <button >Buscar Por Tipo</button>
        </Link>
        <Link to='/poke_nombre'>
        <button >Buscar por Nombre</button>
        </Link>
        </div>

  <div className="divPaginado">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {pages.map((num) => (
        <button key={num} onClick={() => setCurrentPage(num)}>
          {num}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
      </div>

          <ul className="ultarget">
          {
          pokemonsPaginated?.map(poke => ( 
            
          <li key={poke.name} className="litarget"> 
            <PokeCard url={poke.url}/> 
            </li>    
        )) }
          </ul>

          
        
        </main>
    )
}
export default Pokedex