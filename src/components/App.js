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
  render() {

    return (
      <BrowserRouter>
<div className="App">
       <ul>
         <li><Link className="link" to='/'>Home</Link></li>
         <li><Link className="link" to='/Movies'>Movies</Link></li>
         <li><Link className="link" to='/TvShowes'>Tv Showes</Link></li>
       </ul>
<hr />

<Route exact path='/' component={Home}/>
<Route path='/Movies' component ={Movies}/>
<Route path='/TvShowes' component={TvShowes}/>




      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
