import './App.css';
import Characters from './component/characters';
import Character from './component/character';
import { Route,Routes } from 'react-router-dom';
import Film from './component/film';
import Planet from './component/planets';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path ="/" element= {<Characters/>}/>
          <Route path ="/Characters/:id" element= {<Character/>}/>
          <Route path = "/Film/:id" element = {<Film/>}/>
          <Route path = "Planet/:id" element = {<Planet/>}/>
        </Routes>
    </div>
  );
}

export default App;
