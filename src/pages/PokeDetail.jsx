import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const PokeDatail=()=>{

    const[pDetail, setPDetail]=useState({})

    const{id}=useParams()
    useEffect(()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => {
          setPDetail(resp.data);
        })
        .catch(error=>{console.error(error)
             
          }  )
    }, []);

return (
<>
<Link to='/pokedex'>Ir a Lista De Pokemones</Link>
<main className=" detail">

<h1>Detalle del Pokemon</h1>
<div className="contImgDePoke">
<img src={pDetail.sprites?.other?.['official-artwork']?.front_default} className="imgDePoke"></img>
</div>
<h2><img  src="/pokebola.png" className="imgPokeDetail"></img> {pDetail.id} {pDetail.name}</h2>
<h3>Peso:{pDetail.weight*0.1}kg  Altura:{(pDetail.height*0.1).toFixed(1)}m Tipo:{pDetail.types?.[0]?.type?.name}
 {pDetail.types?.[1]?.type?.name!=undefined?['/ ']+pDetail.types?.[1]?.type?.name:''} </h3>
 <ul className="ulAbili">Abilidades: {pDetail?.abilities?.map(abi=>
<li key={abi?.ability?.name} className="liAbili">{abi?.ability?.name}</li>
)}</ul>
<h3>Atack {pDetail.stats?.[1]?.base_stat}</h3>
<h3>Defense {pDetail.stats?.[2]?.base_stat}</h3>
<h3>Special-Attack {pDetail.stats?.[3]?.base_stat}</h3>
<h3>Special-Defense {pDetail.stats?.[4]?.base_stat}</h3>
<h3>Speed {pDetail.stats?.[5]?.base_stat}</h3>
<button className="ulMove">Moviminetos: {pDetail?.moves?.map(mov=>
<button key={mov?.move?.name} className="libMove">{mov?.move?.name}</button>

)}</button>


</main>

</>

)
}
export default PokeDatail