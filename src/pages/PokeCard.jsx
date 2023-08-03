
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PokeCard=({url})=>{
   
    const [searchpoke, setSearchPoke] = useState({});

   
    const nav=useNavigate()

   

    useEffect(() => {
        axios
        /*.get(`https://pokeapi.co/api/v2/pokemon/${url}`)*/
        .get(url)
        .then((resp) => {
          
          setSearchPoke(resp.data);
        })
        .catch(error=>{
          console.error(error)
          nav('/not_found')  
          }  )
    }, []);

   
    
    return(
      
<main className="pokeCard">
<Link to={`${searchpoke.id}`} className="link">
<div className="conteImgPokemon">
<img src={searchpoke.sprites?.other?.['official-artwork']?.front_default} className="imgPoke"></img>
<h2>{searchpoke.name}</h2>
<hr></hr>
<h3>{searchpoke.stats?.[0]?.base_stat} PS</h3>
</div>
<div className="conteInfoPoke">
<h3>{(searchpoke.height*0.1).toFixed(1)} m<h3></h3><label>Altura</label></h3>
<h3>|  {searchpoke.types?.[0]?.type?.name} {searchpoke.types?.[1]?.type?.name!=undefined?['/ ']+searchpoke.types?.[1]?.type?.name:''}  |</h3>
<h3>{(searchpoke.weight *0.1).toFixed(1)} kg<h3></h3><label>Peso</label></h3>
</div>
</Link>
</main>




    )
}
export default PokeCard