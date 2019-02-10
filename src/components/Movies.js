import React from 'react';
import './movies.css';
import OneMovie from './OneMovie.js';
import {
   Link, 
    Route
} from 'react-router-dom';
 export default function Movies (props){
     return (<div>
<div className='box'>
    
    
    {console.log(props.data)}
    {props.data.slice(0,8).map((ele)=>(
        <div className='smallbox'>
        <Link to="Movies/movie1">
        <img src={`http://image.tmdb.org/t/p/w185${ele.poster_path}`} alt="movie pic"/>
        </Link>
        </div>
    ))}
    <Route  path={`Movies/:movie1`} component={OneMovie}/>
</div>
</div>
     
     )
 }