//ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. 
//All this data can be stored in an array, no networking or database needed for this assignment.
import React, { useState } from 'react'
import Review from './Review'

const ReviewForm = () => {
  const [review, setReview] = useState([]);
  const [name, setName] = useState([]);

  return (
    <>
        <form>
            <label>Name: </label>
            <br/>
            <input placeholder='enter your name' value={name}/>
            <Review value={review}/>
             <button type='submit' onClick={() => {
                setReview();
                setName();
             }}>Submit</button>
        </form>
    </>
  )
}

export default ReviewForm