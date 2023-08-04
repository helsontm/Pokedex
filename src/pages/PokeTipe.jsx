import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

// Array de tipo
let tipo=[ "normal","fighting","flying", "poison","ground","rock","bug","ghost",
"steel","fire","water","grass","electric","psychic", "ice", "dragon","dark","fairy"
 ]
  

const PokeTipe=()=>{
  //estado General
    const [pokeList, setPokeList] = useState([]);
// estado del tipo
    const [searchId, setSearchId] = useState("");

    useEffect(() => {
      //numero random -> Math.floor((Math.random() * (max - min + 1)) + min);
      const randomId = Math.floor(Math.random() * 18 + 1);
  
      axios
        .get(`https://pokeapi.co/api/v2/type/${randomId}`)
        .then((resp) => {
          setPokeList(resp.data);
        })
        .catch((error) => console.error(error));
    }, []);

   
    const nav=useNavigate()



      const submit = (e) => {
        //Un metodo que impide el comportamiento predeterminado del evento
        e.preventDefault();
    
        axios
          .get(`https://pokeapi.co/api/v2/type/${searchId}`)
          .then((resp) => {
            console.log(resp.data);
            setPokeList(resp.data);
          })
          .catch(error=>{
            console.error(error)
            nav('/not_found')  
            }  )
      };

      const [currentPage, setCurrentPage] = useState(1);
      
  const pokemonsPerPage = 20;

  const lastIndex = pokemonsPerPage * currentPage; //uno mas
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonsPaginated = pokeList.pokemon?.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(pokeList.pokemon?.length / pokemonsPerPage);
  // 1.75 -> round -> 2
  // 1.1 -> round -> 1
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

    


    return(


        <main>
          <Link to="/pokedex"><img src="salida.png" title="Regresar A La Pokedex"/></Link>
          <div className="divheadertipo">
             <h1>Busqueda por Tipo</h1>
             {/*Formulario de busqueda por tipo*/}
             <form onSubmit={(e) => submit(e)}>
             <select value={searchId} onChange={(e) => setSearchId(e.target.value)}>
             
             {/* busqueda por tipo de arreglo*/}
        {tipo.map((pokemon) => (
          <option key={pokemon} value={pokemon}>
            {pokemon}
          </option>
        ))}
      </select>
        <button type="submit">Filtrar</button>
      </form>
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
            
          <li key={poke.pokemon.url} className="litarget"> 
            <PokeCard url={poke.pokemon.url}/> 
            </li>    
        )) }
          </ul>

          
        
        </main>
    )
}
export default PokeTipe