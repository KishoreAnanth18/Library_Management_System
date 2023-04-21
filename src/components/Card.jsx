import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className='book_list'>
      {props.details && props.details.map((value, index) => (
        <div className='card' key = {value.id}>
          <Link to={`/books/${value.id}`}>
            <div className='card_image'> 
              <img src={value.imageLink} alt={value.title}/>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Card