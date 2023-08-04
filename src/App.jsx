import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokeTipe from './pages/PokeTipe';
import PokeNombre from './pages/PokeNombre';
import PokeDetail from './pages/PokeDetail'
import NotFound from './pages/NotFound';
function App() {



    return (
        <>
        <HashRouter>
         
        <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/pokedex" element={<Pokedex/>} />
          <Route  path='/pokedex/:id'
          element={<PokeDetail/> }/>
          <Route path='/poke_tipo' element={<PokeTipe/>}/>
          <Route  path='/poke_tipo/:id'
          element={<PokeDetail/> }/>
           <Route path='/poke_nombre' element={<PokeNombre/>}/>
          <Route  path='/poke_nombre/:id'
          element={<PokeDetail/> }/>
          <Route path='/not_found' element={<NotFound/>}/>
          
        </Routes>

        </HashRouter>


        </>
      )
    }
    
    export default App;