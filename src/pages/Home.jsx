import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home=()=>{

    const [userLogin, setUserLogin] = useState("");
    const naveg=useNavigate()
    const desp= useDispatch()
   
    const submit = (e) => {
        //Un metodo que impide el comportamiento predeterminado del evento
        e.preventDefault();
        if(userLogin!==''){
            desp(setUserLogin(userLogin))
            naveg('/pokedex')
            {<Link to="/pokedex"></Link>}
            localStorage.setItem('userLogin', userLogin)
        }else
        alert('Por favor digita un nombre')
    }


    

    
    
    return(
<>

    <h1>Home</h1>
     
     <div className="contHome"> 

    <div className="home">
        <h2>Bienvenido Trainer</h2>
        <p>Ingresa tu nombre para acceder a la Pokedex</p>
        <img src="/entrenador.png" className="imgTrainer"></img>
        <form onSubmit={(e) => submit(e)}>
            <h3 htmlFor="name">Ingresa tu nombre aqui:</h3>
        <input
          type="text"
          placeholder="Your Name plese Trainr"
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>    
    

        <Link to='/pokedex'>
            <button>Ir a Lista de Pokemones</button>
        </Link>
        </div>
        </div>

</>

    )
}
export default Home