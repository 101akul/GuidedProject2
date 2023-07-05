import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
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
        <li><Link to ={`/Character/${character.id}`}></Link>{character.name}</li>);
    return (<div>
        <ul>
            {
            CharactersHtml
            }
            characters component
        </ul>
    </div>)
}


export default Characters;