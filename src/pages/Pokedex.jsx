import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";


const Pokedex=()=>{
    const [pokeList, setPokeList] = useState([]);
   

    useEffect(() => {
    
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/`)
          .then((resp) => {
            setPokeList(resp.data.results);
          })
          .catch((error) => console.error(error));
      }, []);

    

console.log(pokeList)
    return(

        <main>
          <Link to="/">Home</Link>
             <h1>Pokedex</h1>
          <ul className="ultarget">
          {pokeList?.map(poke => (
          
            
          <li key={poke.name} className="litarget"> 

            <PokeCard url={poke.url}/>
            
            
            
            </li> 

         
          
            
        )) }

          </ul>
        
        </main>
    )
}
export default Pokedex