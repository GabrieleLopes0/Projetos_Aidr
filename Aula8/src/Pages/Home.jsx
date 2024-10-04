import React from 'react'
import Box from '../Components/Box'
import img1  from "../assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="d-flex">
        <Box 
          title="Título do componente"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          imagem={img1}
        />

        <Box
          title="Título do componente 2"
          description="Lorem Ipsum is simply dummy text of the p"
          imagem={img2}
        />
      </div>  
    </div>
  )
}
