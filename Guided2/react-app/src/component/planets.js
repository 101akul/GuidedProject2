import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const baseUrl = `http://localhost:4000/api`


 export default function Planet(props){
    const[planet, setPlanet] = useState({});
    const{id} = useParams();


    async function getPlanet(){
        var planet = await fetchPlanet()
        setPlanet(planet);
    }
    async function fetchPlanet() {
        var planetUrl = `${baseUrl}/planets/${id}`;
        return await fetch(planetUrl)
      .then(res => res.json())
  }


    useEffect(() => {getPlanet()}, []);
    /*const FilmsHtml = characters.map((character) =>
        <div><Link to = "character" state = {{"id":character.id}}>{character.name}</Link></div>);
*/
        return (
        <div>
            <h1 id="name">{planet.name}</h1>
            <section id="generalInfo">
            <p>Population:{planet.population} <span id="population"></span></p>
            <p>Climate: {planet.climate}<span id="climate"></span></p>
            <p>Diameter: {planet.diameter} <span id="diameter"></span>km</p>
            </section>
            <section id="characters">
            <h2>Characters</h2>
            <PlanetCharacters id = {id}/>
            </section>
            <section id="films">
            <h2>Films Produce on <h2 id="name"></h2> </h2>
            <PlanetFilms id = {id}/>
            </section>
        </div>
        )
}


 function PlanetCharacters(props){
    const[characters, setCharacters] = useState([]);
    async function getCharacters(){
        var characters = await fetchPlanetCharacters()
        setCharacters(characters);
    }

    async function fetchPlanetCharacters() {
        var charactersUrl = `${baseUrl}/films/${props.id}/characters`;
        return await fetch(charactersUrl)
      .then(res => res.json())
  }
    useEffect(() => {getCharacters()}, []);
    
    const CharactersHtml = characters.map((character) =>
        <div><Link to = {`/Characters/${character.id}`}>{character.name}</Link></div>);

        return (
        <div>
            {
            CharactersHtml
            }
        </div>
        )
}
function PlanetFilms(props){
    const[films, setFilms] = useState([]);
    async function getPlanetFilms(){
        var films = await fetchPlanetFilm()
        setFilms(films);
    }

    async function fetchPlanetFilm() {
        var filmsUrl = `${baseUrl}/planets/${props.id}/films`;
        return await fetch(filmsUrl)
      .then(res => res.json())
  }
    useEffect(() => {getPlanetFilms()}, []);
    
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
