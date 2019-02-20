import React,{Component} from 'react';
import './movies.css';
import OneMovie from './OneMovie.js';
import {
   Link, 
   Route,
   
    } from 'react-router-dom';

 class Movies extends Component  {
     constructor(props){
         super(props);
         this.state={
             data:[],
             moviedata:{},
             loading:true
         }
         this.fetchMoviesData=this.fetchMoviesData.bind(this);
         this.fetchOneMovieData=this.fetchOneMovieData.bind(this);
     }


     componentDidMount(){
        this.fetchMoviesData();
          }
          componentDidUpdate(){
            this.fetchMoviesData();

          }

          fetchOneMovieData(element){
this.setState({
    moviedata:element
})
          }
        
          fetchMoviesData(){
        const encodedURI=encodeURI(`https://api.themoviedb.org/3/movie/${this.props.kind}?api_key=9f9325b5853f1d7c7965f643d2cf0d51&language=en-US&page=1`);
        return fetch(encodedURI)
        .then((data)=>data.json())
        .then ((repos)=>{
          this.setState({
        data:repos.results,
        loading:false
    
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
         <h1 className='bigtitle'>{this.props.kind} Movies</h1>

<div className='boxx'>
   { 
       this.loading === true ? <h1>waiit loading...</h1>:
       this.props.location.pathname === '/Movies'?
       this.state.data.map((ele)=>(
        <div className='smallbox' key={ele.id} > 
        <Link to={`${this.props.match.url}/${ele.id}`} onClick={()=>this.fetchOneMovieData(ele)}>
        <img src={`http://image.tmdb.org/t/p/w185${ele.poster_path}`} alt="movie pic"/>
        </Link>
        </div> )) :
        null
  }

   
  

<Route  path={`${this.props.match.path}/:topicId`}   
render={(props)=> <OneMovie {...props} data={this.state.data} moviedata={this.state.moviedata} />}
/>


   
</div>
</div>

     
     )
 }}

 export default Movies;