import './App.css';
import Characters from './component/characters';
import Character from './component/character';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path ="/" element= {<Characters/>}/>
          <Route path ="/Characters/:id" element= {<Character/>}/>
        </Routes>
    </div>
  );
}

export default App;
