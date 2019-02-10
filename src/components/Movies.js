import React from 'react';
import './movies.css';
import OneMovie from './OneMovie.js';
import {
    Link,
    Route
} from 'react-router-dom';
 export default function Movies ({match}){
     return (<div>
<div className='box'>
    <div className='smallbox'><Link to={`${match.url}/movie1`}>1</Link></div>
    <div className='smallbox'>2</div>
    <div className='smallbox'>3</div>
    <div className='smallbox'>3</div>
    <div className='smallbox'>1</div>
    <div className='smallbox'>2</div>
    <div className='smallbox'>3</div>
    <div className='smallbox'>3</div>
    <Route  path={`${match.path}/:topicId`} component={OneMovie}/>
</div>
</div>
     
     )
 }