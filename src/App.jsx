import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokeDatail from './pages/Pokedetail';
import NotFound from './pages/NotFound';
function App() {



    return (
        <>
        <HashRouter>
          <h1>soy un header</h1>
        <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/pokedex" element={<Pokedex/>} />
          <Route  path='/pokedex/:id'
          element={ <PokeDatail/> }/>
          <Route path='/not_found' element={<NotFound></NotFound>}/>
          
        </Routes>
<h1>soy un footer</h1>
        </HashRouter>


        </>
      )
    }
    
    export default App;