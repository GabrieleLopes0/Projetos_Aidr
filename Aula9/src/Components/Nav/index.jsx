import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css";

export default function Nav() {
  return (
    <nav>
        <ul className="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
  )
}
