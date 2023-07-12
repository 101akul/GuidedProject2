import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Character from './character';
const baseUrl = `http://localhost:4000/api`

 function Characters(){
    const[characters, setCharacters] = useState([]);
    async function getCharacters(){
        var characters = await fetchCharacters()
        setCharacters(characters);
    }
    async function fetchCharacters() {
        var characterUrl = `${baseUrl}/characters`;
        return await fetch(characterUrl)
      .then(res => res.json())
  }
    useEffect(() => {getCharacters()}, []);
    
    console.log(characters)
    const CharactersHtml = characters.map((character) =>
        <div><Link to ={`/Characters/${character.id}`} >{character.name}</Link></div>);

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