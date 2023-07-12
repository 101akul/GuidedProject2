import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const baseUrl = `http://localhost:4000/api`


 export default function Film(props){
    const[film, setFilm] = useState({});
    const{id} = useParams();


    async function getFilm(){
        var film = await fetchFilm()
        setFilm(film);
    }
    async function fetchFilm() {
        var filmUrl = `${baseUrl}/films/${id}`;
        return await fetch(filmUrl)
      .then(res => res.json())
  }


    useEffect(() => {getFilm()}, []);
    /*const FilmsHtml = characters.map((character) =>
        <div><Link to = "character" state = {{"id":character.id}}>{character.name}</Link></div>);
*/
        return (
        <div>
            <h1 id="movName">{film.title}</h1>
            <section id="generalInfo">
            <p>Released: {film.release_date} <span id="released"></span></p>
            <p>Director: {film.director}<span id="director"></span></p>
            <p>Producer: {film.producer}<span id="episode"></span></p>
            </section>
            <section id="characters">
            <h2>Characters</h2>
            <FilmCharacters id={id}/>
            </section>
            <section id="planets">
            <h2>Planets</h2>
            <FilmPlanets id = {id}/>
            </section>
        </div>
        )
}


 function FilmCharacters(props){
    const[characters, setCharacters] = useState([]);
    async function getCharacters(){
        var characters = await fetchFilmCharacters()
        setCharacters(characters);
    }

    async function fetchFilmCharacters() {
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
function FilmPlanets(props){
    const[planets, setPlanets] = useState([]);
    async function getPlanets(){
        var planets = await fetchFilmPlanets()
        setPlanets(planets);
    }

    async function fetchFilmPlanets() {
        var planetsUrl = `${baseUrl}/films/${props.id}/planets`;
        return await fetch(planetsUrl)
      .then(res => res.json())
  }
    useEffect(() => {getPlanets()}, []);
    
    const PlanetsHtml = planets.map((planet) =>
        <div><Link to = {`/Planet/${planet.id}`}>{planet.name}</Link></div>);

        return (
        <div>
            {
            PlanetsHtml
            }
        </div>
        )
}
