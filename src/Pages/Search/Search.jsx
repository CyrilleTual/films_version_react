
import React, { useEffect, useState } from 'react';
import {API_KEY, BASE_URL} from '../../data/const'


const Search = () => {

    const [searchInput, setSearchInput] = React.useState("");  // input 
    const [filmsSearch, setFilmsSeach] = useState([]); // tableau des films proposé
    const [filmsSelected, setFilmsSelected] = useState([]); // le film particulier selectionné 

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
        const uri = `${BASE_URL}/movie/${e.target.dataset.id}?api_key=${API_KEY}`
        const encodedURI = encodeURI(uri);
        fetch(encodedURI)
        .then(res => res.json())
        .then ((datas) => (setFilmsSelected((datas.results))))
        .catch(err => console.log(err));
        
        console.log (filmsSelected)
    }

    return (
        <div>
            <h1> Vous cherchez quelque chose? </h1>
            <div>
                <input type="text" name="search-input" id="search-input" value={searchInput} onChange={handleChange}/>
            </div>
            <div id="wrapper">
                <ul id = "list">
                    {filmsSearch.map((film => 
                        <li key ={film.id}>
                            <a data-id ={film.id} href="#" onClick={getDetail}>{film.original_title} </a>
                        </li> ))
                    }
                </ul>     
            </div>   
        </div>
    );
};

export default Search;