import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home=()=>{

    


    
    
    return(
<>
<main>
    <h1>Home</h1>

    <div>
        <h2>Bienvenido Trainer</h2>
        <p>Ingresa tu nombre para acceder a la Pokedex</p>
        <img src="/entrenador.png" className="imgTrainer"></img>
        <form  >
            <h3 htmlFor="name">Ingresa tu nombre aqui:</h3>
<input  type="text" id="name"
placeholder="Your Name plese Trainr"/>
<button type="submit">Ingresar</button>
        </form>
    </div>

    <ul>
        <li>
          <Link to="/pokedex">Ir a Lista de Pokemones</Link>
        </li>
        </ul>
        <Link to='/pokedex'>
            <button>Ir a Lista de Pokemones</button>
        </Link>
</main>
</>

    )
}
export default Home