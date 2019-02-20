import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import TvShowes from './TvShowes';
import {
  BrowserRouter,
  Route,
  Link,
  
} from 'react-router-dom';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    kindofmovie:'top_rated'
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
       </ul>
<hr />

<Route  path='/Movies' render={(props)=> <Movies {...props} kind={this.state.kindofmovie}/>}/>
<Route path='/TvShowes' component={TvShowes}/>

    





      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
