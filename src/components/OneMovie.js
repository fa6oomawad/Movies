import React from 'react';
import  "./onemovie.css";
export default function OneMovie (props){
    return (
       <div className="box">{props.moviedata.title}</div> 
    )
}