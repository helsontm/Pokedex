import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState} from "react";
import PokeCard from "./PokeCard";




const PokeNombre=()=>{
  //estado General
    const [pokeList, setPokeList] = useState([]);
// estado de la busqueda
const [searchId, setSearchId] = useState("");
//por si no exite lo que se busca
const nav=useNavigate()


   



    
//Muestra todos los pokemons
    

      const submit = (e) => {
        //Un metodo que impide el comportamiento predeterminado del evento
        e.preventDefault();

        if(searchId!=='' && searchId!==0){
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${searchId}`)
          .then((resp) => {
            console.log(resp.data?.forms);
            setPokeList(resp.data?.forms);
          })
          .catch(error=>{
            console.error(error)
            nav('/not_found')  
            }  )
        }
        else
        alert('Por favor digita un nombre / numero de Pokemon')

        
      };

     


    

  

    console.log(pokeList[0]?.name)


    return(


        <main>
           <Link to="/pokedex"><img src="salida.png" title="Regresar A La Pokedex"/></Link>
<div className="divBusNombre">

<h1>Buscar Por Nombre / Numero de pokemon</h1>
<form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          placeholder="Ingresa el id del tipo"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>    
      </div>   

          <ul className="ultarget">
          {
          pokeList?.map(poke => ( 
            
            
          <li key={poke.name} className="litarget"> 
            <PokeCard url={poke.url}/> 
            </li>    
        )) }
          </ul>

          
        
        </main>
    )
}
export default PokeNombre