
import React, { useEffect, useState } from 'react';
import {API_KEY, BASE_URL} from '../../data/const'


const Search = () => {

    const [filmsSearch, setFilmsSeach] = useState([]); // tableau des films proposé
    const [filmsSelected, setFilmsSelected] = useState([]); // le film particulier selectionné 
    const [companies, setCompanies] = useState([]); // le film particulier selectionné 

    function searchHandler(e) {
        e.preventDefault();
        if(e.target.value){
            let urlReq1 = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${e.target.value}`
            fetch(urlReq1)
            .then (res => res.json())
            .then ((datas) => (setFilmsSeach((datas.results))))
        }else (setFilmsSeach([]))
    }

    // va chercher un film en particulier 
    function getDetail(e){
    e.preventDefault();

        console.log (e.target.dataset.id)

        const uri = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.textContent}&page=1&include_adult=false`;

        //const uri = `${BASE_URL}/movie/${e.target.dataset.id}?api_key=${API_KEY}`


        const encodedURI = encodeURI(uri);
        fetch(encodedURI)
        .then(res => res.json())
        .then ((datas) => (setFilmsSelected((datas.results))))
        .catch(err => console.log(err))
    }

     // on va chercher la liste des compagnies de prod
    function getListCompagnies (idFilm){
       // fetch(`${BASE_URL}/movie/${idFilm}?api_key=${API_KEY}`)
           // .then(res => res.json())
           // .then(res => console.log(res.production_companies))
        //     .catch(err => console.log(err))
    }




    // event listener / rechercher 
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("search-input").addEventListener("input", searchHandler);
    });

    return (
        <div>
            <h1> Vous cherchez quelque chose? </h1>
            <div>
                <input type="text" name="search-input" id="search-input"/>
            </div>
            <div id="wrapper">
                <ul id = "list">
                    {filmsSearch.map((film => 
                        <li key ={film.id}>
                            <a  data-id ={film.id} href="#">{film.original_title}</a>
                        </li> ))
                    }
                    {document.querySelectorAll("#list a")
                        .forEach(a => {a.addEventListener("click", getDetail);})
                    }
                </ul>     
            </div>   
        </div>
    );
};

export default Search;