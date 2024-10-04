import React from 'react'

export default function Banner(props) {
  console.log(props.children)
  return (
    <div className="bannerStyle">
        {props.children}
    </div>
  )
}

