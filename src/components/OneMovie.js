import React from 'react';
import  "./onemovie.css";
export default function OneMovie (props){
    return (
       <div className="box1">
       
       <div className="movieImg">
<img src={`http://image.tmdb.org/t/p/w185${props.moviedata.poster_path}`}  alt="movie poster"/>
       </div>
       <div className="titlee">
       <h2>{props.moviedata.title}</h2>
       
       </div>
       <div className="info">
       <h3> Overview :</h3>
<p> 
    {props.moviedata.overview}
</p>
<h3> Release Date :</h3>
<p> 
    {props.moviedata.release_date}
</p>

<h3> Popularity :</h3>
<p> 
    {props.moviedata.popularity}
</p>

<h3> Rate :</h3>
<p> 
    {props.moviedata.vote_average} /10
</p>
       </div>
       <div>

       </div>
       
       </div> 
    )
}