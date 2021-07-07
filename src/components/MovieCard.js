import React from 'react';
import Rate from './Rate'
import {Link} from 'react-router-dom';


export default function MovieCard({ movie: {id, title, posterUrl, description, rate } }) {
    return (
        <div >
        
            <div className="card"  >
                <img className="card-img-top" src={posterUrl} alt="img" style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    
                    <p className="card-text">{description}</p>
                   
                        <Rate rating ={rate} />
                        <Link className="btn btn-primary" to={`/MovieDetails/`+id}>
                 Movie Details
                </Link>
                </div>
         
                
            </div>
        </div>
    )
}
