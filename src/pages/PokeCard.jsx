
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PokeCard=({url})=>{
   
    const [searchId, setSearchId] = useState({});

   
    const nav=useNavigate()

   

    useEffect(() => {
        axios
        /*.get(`https://pokeapi.co/api/v2/pokemon/${url}`)*/
        .get(url)
        .then((resp) => {
          
          setSearchId(resp.data);
        })
        .catch(error=>{
          console.error(error)
          nav('/not_found')  
          }  )
    }, []);

   
    
    return(
      
<main className="pokeCard">
<Link to={`${searchId.id}`} className="link">
{console.log(searchId.stats?.[4])}
<div className="conteImgPokemon">
<img src={searchId.sprites?.other?.['official-artwork']?.front_default} className="imgPoke"></img>
<h2>{searchId.name}</h2>
<hr></hr>
<h3>{searchId.stats?.[0]?.base_stat} PS</h3>
</div>
<div className="conteInfoPoke">
<h3>{(searchId.height*0.1).toFixed(1)} m<h3></h3><label>Altura</label></h3>
<h3>|  {searchId.types?.[0]?.type?.name} {searchId.types?.[1]?.type?.name!=undefined?['/ ']+searchId.types?.[1]?.type?.name:''}  |</h3>
<h3>{(searchId.weight *0.1).toFixed(1)} kg<h3></h3><label>Peso</label></h3>
</div>
</Link>
</main>




    )
}
export default PokeCard