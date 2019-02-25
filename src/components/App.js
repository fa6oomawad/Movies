import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import TvShowes from './TvShowes';
import Search from './Search';
import {
  BrowserRouter,
  Route,
  Link,
  
} from 'react-router-dom';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    kindofmovie:'top_rated',
    searchResult:''
  }
  this.displayHiddenBar=this.displayHiddenBar.bind(this);
  this.hidenBar=this.hideBar.bind(this);
}

displayHiddenBar(){
  var list= document.getElementById('blabla');
  list.style.display='block';
}
hideBar(){
  var list1= document.getElementById('blabla');
  list1.style.display='none';
}

getKindOfMovies (e){
var kind=e.currentTarget.textContent;
this.setState({
  kindofmovie:kind,
})
console.log('de al-state>>',this.state.kindofmovie);
}

findSearchedMovie(e){
 this.setState({
   searchResult:e.currentTarget.value
 })
 console.log("funnn",e.currentTarget.value);
}

  render() {

    return (
      <BrowserRouter>
<div className="App">
       <ul className='mainList'>
         <li className='mainItem' onMouseOver={()=>this.displayHiddenBar()} onMouseOut={()=>this.hideBar()} ><Link className="link" to='/Movies'>Movies</Link>
       
         <ul className='hiddenBar' id='blabla'>
           <li onClick={this.getKindOfMovies.bind(this)} >popular</li>
           <li onClick={this.getKindOfMovies.bind(this)}>top_rated</li>
           <li onClick={this.getKindOfMovies.bind(this)}>upcoming</li>
         </ul>
         </li>
         <li className='mainItem'><Link className="link" to='/TvShowes'>Tv Showes</Link>
         
         
         </li>
        
        <input type='text'  placeholder='search..' onChange={this.findSearchedMovie.bind(this)} />
<Link to='/SearchResult' >Search</Link>      
         
         
       </ul>
       
<hr />

<Route  path='/Movies' render={(props)=> <Movies {...props} kind={this.state.kindofmovie}/>}/>
<Route path='/TvShowes' component={TvShowes}/>
<Route path='/SearchResult' render={(props)=> <Search {...props} search={this.state.searchResult}/>}/>
    





      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
