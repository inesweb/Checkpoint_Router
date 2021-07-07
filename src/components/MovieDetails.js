import React from 'react';
import { useParams } from 'react-router-dom';

import { moviesList } from '../services/movies';
import Navbar  from './Navbar';

const MovieDetails =()=> {
  

 const { id } = useParams();
 
 const movie = moviesList[id];
 const { title } = movie ;
 const { description } = movie ;
 const { youtube } = movie ;

    return(
      <>
      <Navbar/>
        <div className="global">
        
          <br/>  <br/>
          <br/>
          <br/>
       
        <h4 className="card-title">{title}</h4>
                        
      <p className="card-text">{description}</p>
        <br/> <br/> 
      
  
        <iframe width="560" height="315" src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       

  </div>
    
    </>
    )
}

export default MovieDetails;




