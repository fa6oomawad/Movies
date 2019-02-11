import React,{Component} from 'react';
import './movies.css';
import OneMovie from './OneMovie.js';
import {
   Link, 
    Route
} from 'react-router-dom';

 class Movies extends Component  {
     constructor(props){
         super(props);
         this.state={
             data:[]
         }
         this.fetchMoviesData=this.fetchMoviesData.bind(this);

     }


     componentDidMount(){
        this.fetchMoviesData();
        console.log('match',this.props.match.url)
          }
        
          fetchMoviesData(){
        const encodedURI=encodeURI('https://api.themoviedb.org/3/discover/movie?api_key=9f9325b5853f1d7c7965f643d2cf0d51&primary_release_date.gte=2019-01-11&primary_release_date.lte=2019-2-10&total_results=8');
        return fetch(encodedURI)
        .then((data)=>data.json())
        .then ((repos)=>{
          this.setState({
        data:repos.results
          }
          )
        
        
        })
        .catch((error)=>{
          console.warn(error)
          return null 
        });
             }

     render(){
     return (
     <div>
<div className='box'>
    {console.log(this.state.data)}
    {this.state.data.slice(0,8).map((ele)=>(
        <div className='smallbox' key={ele.id}>
        <Link to={`${this.props.match.url}/movie1`}>
        <img src={`http://image.tmdb.org/t/p/w185${ele.poster_path}`} alt="movie pic"/>
        </Link>
        </div>
    ))}
    
    <Route path={`${this.props.match.path}/:topicId`}   
render={(props)=> <OneMovie {...props} data={this.state.data}/>}/>
</div>
</div>
     
     )
 }}

 export default Movies;