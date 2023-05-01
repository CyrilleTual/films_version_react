import React from 'react'
import { API_URL_IMG } from '../../../data/const'
import styles from "./uniqfilm.module.css"

function UniqFilm({film}) {

    // on va chercher la liste des compagnies de prod

    let idFilm = film.id

    console.log (idFilm)

    function getListCompagnies (id){
       // fetch(`${BASE_URL}/movie/${idFilm}?api_key=${API_KEY}`)
           // .then(res => res.json())
           // .then(res => console.log(res.production_companies))
        //     .catch(err => console.log(err))
    }

  


    console.log (film)

  return (
        <>
            {film.poster_path && <h2>{film.original_title}</h2>}
            {film.poster_path && 
                <img className={styles.pic} src={(API_URL_IMG)+(film.poster_path)} alt="" /> 
            }
            {film.original_title&&<p>Release : {(new Date(film.release_date).toLocaleDateString())}</p>}
            <p>{film.overview}</p> 
        </>
    
  )
}

export default UniqFilm