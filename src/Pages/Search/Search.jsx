
import React, { useEffect, useState } from 'react';
import {API_KEY, BASE_URL} from '../../data/const'
import UniqFilm from './Components/UniqFilm';
import styles from './search.module.css'


const Search = () => {

    const [searchInput, setSearchInput] = React.useState("");  // input 
    const [filmsSearch, setFilmsSeach] = useState([]); // tableau des films proposé
    const [filmsSelected, setFilmsSelected] = useState({}); // le film particulier selectionné 

    const handleChange = (e) => {
        setSearchInput (e.target.value);
        if(e.target.value){
            let urlReq1 = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${e.target.value}`
            fetch(urlReq1)
            .then (res => res.json())
            .then ((datas) => (setFilmsSeach((datas.results))))
        }else (setFilmsSeach([]))
    }

    const getDetail = (e) => {
        console.log(e.target.dataset.id);
        const uri = `${BASE_URL}/movie/${e.target.dataset.id}?api_key=${API_KEY}&language=en-US`
       // https://api.themoviedb.org/3/movie/74944?api_key=9c6de8c116e01800dc9c56fe546028f4&language=en-US
        const encodedURI = encodeURI(uri);
        fetch(encodedURI)
        .then(res => res.json())
        .then ((datas) => (setFilmsSelected(datas)))
        .catch(err => console.log(err));
    }

    return (
        <div class={styles.detail}>
            <h1> Vous cherchez quelque chose? </h1>
            <div className={styles.searchInput}>
                <input type="text" name="search-input" id="search-input" value={searchInput} onChange={handleChange}/>
            </div>
            <div  className={styles.wrapper}>
                <ul id = "list">
                    {filmsSearch.map((film => 
                        <li key ={film.id}>
                            <a data-id ={film.id} href="#" onClick={getDetail}>{film.original_title} </a>
                        </li> ))
                    }
                    
                </ul>
                <div className={styles.half} >
                    <UniqFilm film={filmsSelected}/>  
                </div>  
                 
            </div>   
        </div>
    );
};

export default Search;