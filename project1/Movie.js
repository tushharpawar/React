import React from 'react'

const Movie = (props) => {
  return (
    <div className='Movie'>
        <img src={props.img}/>
        <p>{props.title}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default Movie