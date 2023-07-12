import './App.css';
import Characters from './component/characters';
import Character from './component/character';
<<<<<<< Updated upstream
import { Route,Routes } from 'react-router-dom';
import Film from './component/film';


function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
        <Routes>
          <Route exact path ="/" element= {<Characters/>}/>
          <Route path ="/Characters/:id" element= {<Character/>}/>
          <Route path = "/Film/:id" element = {<Film/>}/>
        </Routes>
=======
      <Character id = "1"/>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
