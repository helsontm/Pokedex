import { Link } from "react-router-dom";
const NotFound=()=>{

    return(
<>
<Link to="/pokedex"><img src="salida.png" title="Regresar A La Pokedex"/></Link>
<div className="notFound">
    
<h1> Pokemon no encontrado</h1>
<img src="/Quienese.jpg" className="imgNotfound"></img>
<h2>404</h2>
</div>
</>

    )

}
export default NotFound