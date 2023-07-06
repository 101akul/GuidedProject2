import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const baseUrl = `http://localhost:4000/api`

 function Film(props){
    const[Film, setFilm] = useState([]);

    async function getFilm(){
        var film = await fetchFilm();
        setFilm(film);
    }
    async function fetchFilm() {
        var FilmUrl = `${baseUrl}/films/${props.id}`;
        return await fetch(FilmUrl)
      .then(res => res.json())
  }


    useEffect(() => {getFilm()}, []);

        return (
        <div>
        <h1 id="movName"></h1>
        <section id="generalInfo">
      <p>Released: <span id="released"></span></p>
      <p>Director: <span id="director"></span></p>
      <p>Episode: <span id="episode"></span></p>
        </section>
        <section id="characters">
      <h2>Characters</h2>
      <ul></ul>
        </section>
        <section id="planets">
      <h2>Planets</h2>
      <ul></ul>
        </section>
        </div>
        )
}


export default Film;