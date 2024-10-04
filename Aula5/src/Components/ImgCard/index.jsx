import React from 'react';
// Importe a imagem diretamente
import img1 from "../../assets/img/img-card.jpg";

import "./imgCard.css";

export default function ImgCard(props) {
    console.log(props)
  return (
    <div className="image-card">
        <img src={img1} alt={props.caption || "Imagem"} className="image-card-img" />
        <p className="image-card-caption">{props.caption || "Imagem interessante"}</p>
    </div>
  )
}
