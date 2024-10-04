import React from 'react'
import "./button.css";

export default function Button(props) {
    console.log(props);
  return (
    <button className="btn-style" onClick={props.onClickTeste}>
        {props.text}
    </button>
  )
}
