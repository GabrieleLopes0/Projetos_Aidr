import React from 'react'
import "./header.css";

export default function Header({title, subtitle}) {
  return (
    <header>
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </header>
  )
}
