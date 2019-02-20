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
  this.displayHiddenBar=this.displayHiddenBar.bind(this);
  this.hidenBar=this.hidenBar.bind(this);
}

displayHiddenBar(){
  var list= document.getElementById('blabla');
  console.log(list);
  list.style.display='block';
}
hidenBar(){
  var list1= document.getElementById('blabla');
  list1.style.display='none';
}

  render() {

    return (
      <BrowserRouter>
<div className="App">
       <ul className='mainList'>
         <li className='mainItem' onMouseOver={()=>this.displayHiddenBar()} onMouseOut={()=>this.hidenBar()} ><Link className="link" to='/Movies'>Movies</Link>
       
         <ul className='hiddenBar' id='blabla'>
           <li>Popular</li>
           <li>Top rated</li>
           <li>Upcoming</li>

         </ul>
         </li>
         <li className='mainItem'><Link className="link" to='/TvShowes'>Tv Showes</Link>
         
         
         </li>
       </ul>
<hr />

<Route  path='/Movies' component ={Movies}/>
<Route path='/TvShowes' component={TvShowes}/>

    





      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
