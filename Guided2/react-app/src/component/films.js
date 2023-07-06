import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const baseUrl = `http://localhost:4000/api`

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
        <div><Link to = "Film" state = {{"id":film.id}}>{film.title}</Link></div>);

        return (
        <div>
            {
            FilmsHtml
            }
        </div>
        )
}


export default Films;