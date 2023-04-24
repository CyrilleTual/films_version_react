import React from 'react';
import { API_URL_IMG } from '../../../data/const.js';

const Films = (data) => {
    //console.log (data)
    return (
        <div>
            <h2>{data.film.original_title}</h2>
            {data.film.poster_path && <img src={(API_URL_IMG)+(data.film.poster_path)} alt="" /> }
            <p>Vote count :  {data.film.vote_count}</p>
            <p>Vote average : {data.film.vote_average}</p>
            <p>Release : {(new Date(data.film.release_date).toLocaleDateString())}</p>
            <p>{data.film.overview}</p> 
        </div>
    );
};

export default Films;