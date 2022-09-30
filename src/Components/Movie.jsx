//Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)
import React from 'react'

const Movie = ({title, poster, year}) => {
  return (
    <div className="container">
        <button className="button">
           <div>
            <div>
                {title}
            </div>
            <div>
                {year}
            </div>
            <img src={poster} alt={title}/>
        </div> 
        </button>
    </div>
  )
}

export default Movie