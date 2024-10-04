import React from 'react'
import { Link } from 'react-router-dom'
import "./notfound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
        <h1>404 - Página Não Encontrada</h1>
        <p>
            A página que você está procurando não existe.
        </p>
        <Link to="/">
            Voltar para Home
        </Link>
    </div>
  )
}
