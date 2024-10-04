import React from 'react'
import "./box.css";

export default function Box({title, description, imagem}) {

  return (
    <section className="container-box">
        <img src={imagem} alt={title} />
        <h1>{title}</h1>
        <p>
           {description}
        </p>
    </section>
  )
}
