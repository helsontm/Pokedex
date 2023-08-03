import { Link } from "react-router-dom";
const NotFound=()=>{

    return(
<>
<Link to="/pokedex">Regresar</Link>
<div className="notFound">
    
<h1>Pokemon no encontrado</h1>
<img src="/pokeanimada.gif" className="imgNotfound"></img>
</div>
</>

    )

}
export default NotFound