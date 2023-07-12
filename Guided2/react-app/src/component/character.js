import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const baseUrl = `http://localhost:4000/api`


 export default function Character(props){
    const[character, setCharacter] = useState([]);
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
        character.Homeworld = Homeworld;
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
            <Link to ={`/Planet/${character.homeworld}`} ><p><span id="homeworld">{character.Homeworld?.name}</span></p></Link>
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


function Films(props){
    const[films, setFilms] = useState([]);
    async function getFilms(){
        var films = await fetchFilms()
        setFilms(films);
    }

    async function fetchFilms() {
        var filmsUrl = `${baseUrl}/characters/${props.id}/films`;
        return await fetch(filmsUrl)
      .then(res => res.json())
  }
    useEffect(() => {getFilms()}, []);
    
    console.log(films)
    const FilmsHtml = films.map((film) =>
        <div><Link to = {`/Film/${film.id}`}>{film.title}</Link></div>);

        return (
        <div>
            {
            FilmsHtml
            }
        </div>
        )
}