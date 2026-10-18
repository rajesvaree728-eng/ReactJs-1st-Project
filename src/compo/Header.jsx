import React, { useState } from 'react'
import "./Header.css"

const Header = (props) => {
    const [count, setCount]=useState(0);
  return (
    <div className='card'>
      <img src='avtar hapy.jpeg' alt="profile">
      </img>
      <h1>Hello {props.name}</h1>
      <p>How to start coding </p>
      <div className='folow'>
        <p>{count}</p>
      <button onClick={()=>setCount(count +1)}>Follow</button>  
      </div>
      <a href="instaid">insta</a>
      <a href="download">download</a>
      <a href="settings">setingd</a>
    </div>
  )
}
export default Header
