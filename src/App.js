import React, { useState } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
function App() {

  return (
   <div className='App'>
        <Router  >
        <Route path='/' component={Home} exact  />
        <Route path='/MovieDetails/:id' component={MovieDetails}   />

       </Router>
    </div>
   
  );
}

export default App;