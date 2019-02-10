import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Movies from './Movies';
import TvShowes from './TvShowes';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
this.fetchMoviesData=this.fetchMoviesData.bind(this);
  }
  componentDidMount(){
this.fetchMoviesData();
  }

  fetchMoviesData(){
const encodedURI=encodeURI('https://api.themoviedb.org/3/discover/movie?api_key=9f9325b5853f1d7c7965f643d2cf0d51&primary_release_date.gte=2019-01-11&primary_release_date.lte=2019-2-10&total_results=8');
return fetch(encodedURI)
.then((data)=>data.json())
.then ((repos)=>{
  console.log(repos.results)
  this.setState({
data:repos.results
  }
  )

  console.log(this.state.data)

})
.catch((error)=>{
  console.warn(error)
  return null 
});
     }



  render() {

    return (
      <BrowserRouter>
<div className="App">
       <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/Movies'>Movies</Link></li>
         <li><Link to='/TvShowes'>Tv Showes</Link></li>
       </ul>
<hr />

<Route exact path='/' component={Home}/>
<Route path='/Movies' 
render={(props)=> <Movies {...props} data={this.state.data}/>}/>
<Route path='/TvShowes' component={TvShowes}/>




      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
