import React, { useEffect, useState } from 'react';
import {API_KEY, BASE_URL} from '../../data/const.js'
import Films from './Components/Films.js';

const Home = () => {

    const [films, setFilms] = useState([]);
    
    useEffect(() => {
        let urlReq1 = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        fetch(urlReq1)
            .then (res => res.json())
            .then ((datas) => (setFilms(datas.results)))           
    }, []);

 
    return (
        <main>
            <h1> Voici les meilleurs films de la semaine</h1>
            <div id="wrapper">
                {films.map(( film => 
                    <article key = {film.id}>
                        <Films film = {film} />
                    </article> ))
                }
            </div>   
        </main>
    );
};

export default Home;