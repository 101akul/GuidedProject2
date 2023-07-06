import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Films from './films';
import { useParams } from 'react-router-dom';
const baseUrl = `http://localhost:4000/api`

/*
function Homeworld(props){
    const [Homeworld, setHomeworld] = useState([]);

    async function getHomeworld(){
        var homeworld = await fetchHomeworld()
        setHomeworld(homeworld);
    }
    async function fetchHomeworld() {
        var HomeworldUrl = `${baseUrl}/planets/${props.homeworld}`;
        return await fetch(HomeworldUrl)
      .then(res => res.json())
    }

    useEffect(() => {getHomeworld()},[]);

    console.log(Homeworld)

    return (
        <section id="planets">
            <h2>Homeworld</h2>
            <p><span id="homeworld">{Homeworld.name}</span></p>
        </section>
    )
     case 'findCharacterFilms':
            collection = db.collection("films_characters");
            const characterFilms = await collection.find({"character_id": Number(parameters.id)}).toArray();
            callback(characterFilms);
            break;

}*/
 function Character(props){
    const[character, setCharacter] = useState([]);
    character.HomeworldNname = "";
    const[films, setFilms] = useState({});
    const{id} = useParams();

    async function fetchHomeworld(character) {
        var HomeworldUrl = `${baseUrl}/planets/${character.homeworld}`;
        return await fetch(HomeworldUrl)
      .then(res => res.json())
    }

    async function getCharacter(){
        var character = await fetchCharacter()
        var Homeworld = await fetchHomeworld(character)
        character.HomeworldName = Homeworld.name;
        setCharacter(character);
    }
    async function fetchCharacter() {
        var characterUrl = `${baseUrl}/characters/${id}`;
        return await fetch(characterUrl)
      .then(res => res.json())
  }


    useEffect(() => {getCharacter()}, []);
    /*const FilmsHtml = characters.map((character) =>
        <div><Link to = "character" state = {{"id":character.id}}>{character.name}</Link></div>);
*/
        return (
        <div>
            <h1 id="name">{character.name}</h1>
            <section id="generalInfo">
            <p>Height:{character.height} <span id="height"></span> cm</p>
            <p>Mass: {character.mass}<span id="mass"></span> kg</p>
            <p>Born: {character.birth_year}<span id="birth_year"></span></p>
            </section>
            <section id="planets">
            <h2>Homeworld</h2>
            <p><span id="homeworld">{character.HomeworldName}</span></p>
            </section>
            <section id="films">
            <h2>Films appeared in</h2>
            <ul>
                <Films id= {id}/>
            </ul>
        </section>
        </div>
        )
}


export default Character;