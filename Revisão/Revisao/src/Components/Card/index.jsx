import React from 'react'
import "./Card.css"

export default function Card({title, description, img1}) {
  return (
    <div className="Card">
        <img src={img1} alt={title} className='card-image' />
        <h2 className="card-title">{title}</h2>
        <p className="card-texto">{description}</p>
    </div>
  )
}
