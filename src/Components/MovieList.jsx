//MovieList – a container for all the Movie components and their data.
import React from 'react'
import ReactStars from 'react-stars'
import Movie from './Movie'
import ReviewForm from './ReviewForm'

const MovieList = ({title, year, id, poster}) => {
  return (
    <>
       <div className="container">
        <div>
             <Movie title={title} year={year} id={id} poster={poster}/>
        </div>
        <div>
            <ReactStars size={40}/>
        </div>
        <div>
            <ReviewForm/>
        </div>
       </div>
        
    </>
   
  )
}

export default MovieList