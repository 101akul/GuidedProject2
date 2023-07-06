import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const baseUrl = `http://localhost:4000/api`

 function Planet(){
    const[planets, setPlanet] = useState([]);
    async function getPlanets(){
        var planets = await fetchPlanets()
        setPlanets(characters);
    }
    async function fetchPlanets() {
        var PlanetUrl = `${baseUrl}/planets/:id`;
        return await fetch(PlanetUrl)
      .then(res => res.json())
  }
    useEffect(() => {getCharacters()}, []);
    
    console.log(characters)
    const CharactersHtml = characters.map((character) =>
        <div><Link to = "character" state = {{"id":character.id}}>{character.name}</Link></div>);

        return (
        <div>
            <div>
                <h1>Star Wars Universe Lookup</h1>
                <label for="searchString">Who you looking for? <span class="small">
                    (Regular expressions are cool here)</span></label>
                <input id="searchString" oninput="filterCharacters()" autocomplete="off" />
            </div>
            <div  id="charactersList">
            {
            CharactersHtml
            }
            </div>
        </div>
        )
}


export default Characters;