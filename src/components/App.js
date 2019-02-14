import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import TvShowes from './TvShowes';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
<div className="App">
       <ul>
         <li><Link className="link" to='/Movies'>Movies</Link></li>
         <li><Link className="link" to='/TvShowes'>Tv Showes</Link></li>
       </ul>
<hr />
<Route path='/' component={Movies}/>
<Route path='/Movies' component ={Movies}/>
<Route path='/TvShowes' component={TvShowes}/>




      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
