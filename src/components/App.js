import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
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
    searchResult:'',
    displayname:'Top Rated'
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
//var kind=e.currentTarget.textContent;
var kind=e.target.id;
var display=e.currentTarget.textContent;
this.setState({
  kindofmovie:kind,
  displayname:display
})
console.log('de al-state>>',e.target.id);
}

findSearchedMovie(e){
 this.setState({
   searchResult:e.currentTarget.value
 })
 console.log("funnn",e.currentTarget.value);
}

  render() {

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL} >
<div className="App">
       <ul className='mainList'>
         <li className='mainItem' onMouseOver={()=>this.displayHiddenBar()} onMouseOut={()=>this.hideBar()} ><Link className="link" to='/Movies'>Movies</Link>
       
         <ul className='hiddenBar' id='blabla'>
           <li onClick={this.getKindOfMovies.bind(this)} id="popular">Popular</li>
           <li onClick={this.getKindOfMovies.bind(this)}id="top_rated">Top Rated</li>
           <li onClick={this.getKindOfMovies.bind(this)} id="upcoming">Upcoming</li>
         </ul>
         </li>
         
         <Link to='/SearchResult' > <div className="icon">
         <button className='searchIcon'></button>  
<div className="stick"></div>
</div></Link>
        
        <input className='searchbar' type='text'  placeholder='search..' onChange={this.findSearchedMovie.bind(this)} />
         
         
       </ul>
       
<hr />
<Route  path='/' render={(routerProps)=> <Movies routerProps={routerProps} kind={this.state.kindofmovie} displayname={this.state.displayname}/>}/>

<Route  path='/Movies' render={(routerProps)=> <Movies routerProps={routerProps} kind={this.state.kindofmovie} displayname={this.state.displayname}/>}/>
<Route path='/SearchResult' render={(routerProps)=> <Search routerProps={routerProps} search={this.state.searchResult}/>}/>
    




      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
