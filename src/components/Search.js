import React , { Component } from 'react';
import OneMovie from './OneMovie';
import {
    Link,
    Route
} from 'react-router-dom';
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            moviedata:{}
        }
        this.fetchResultsData=this.fetchResultsData.bind(this);

    }
componentDidMount(){
this.fetchResultsData();
}
componentDidUpdate(){
    this.fetchResultsData(); 
}
fetchResultsData(){
    const encodedURI=encodeURI(`https://api.themoviedb.org/3/search/movie?api_key=9f9325b5853f1d7c7965f643d2cf0d51&language=en-US&page=1&include_adult=false&query=${this.props.search}`);
    return fetch(encodedURI)
    .then((data)=>data.json())
    .then ((repos)=>{
      this.setState({
    data:repos.results,

      }
      )
    
      console.log(this.state.data)

    })
    .catch((error)=>{
      console.warn(error)
      return null 
    });
         }

         fetchOneMovieData(element){
            this.setState({
                moviedata:element
            })
                      }
render(){
    return (

<div>
<div className='boxx'>
{
   
    this.state.data.map((ele)=>(
        <div className='smallbox' key={ele.id} > 
        <Link to={`${this.props.match.url}/${ele.id}`} onClick={()=>this.fetchOneMovieData(ele)}>
        <img src={`http://image.tmdb.org/t/p/w185${ele.poster_path}`} alt="movie pic"/>
        </Link>
        </div> )) }
<Route path={`${this.props.match.path}/:topicId`}  render={(props)=> <OneMovie {...props} data={this.state.data} moviedata={this.state.moviedata} />}
/>
        </div>
</div>

    );
    
}






}

export default Search;